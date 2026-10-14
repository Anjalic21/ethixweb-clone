#!/usr/bin/env node
/**
 * Securely sets ADMIN_PASSWORD_HASH in .env.local.
 *
 * - Prompts for password with input hidden (no echo, no shell history).
 * - Hashes with bcrypt cost 12.
 * - Self-verifies the hash before writing.
 * - Re-reads and re-verifies after writing.
 * - Never logs the password, hash value, or any secret.
 *
 * Usage:  node scripts/setup-admin.js
 */

'use strict'

const bcrypt = require('bcryptjs')
const fs     = require('fs')
const path   = require('path')

const ENV_PATH = path.resolve(__dirname, '..', '.env.local')

// Read password from TTY without echoing — works on macOS/Linux
function readPasswordFromTTY () {
  return new Promise((resolve, reject) => {
    const tty = fs.openSync('/dev/tty', 'r+')
    const buf = Buffer.alloc(256)
    fs.writeSync(tty, 'Enter new admin password (hidden, min 8 chars): ')

    // Switch terminal to raw mode so we can read char-by-char without echo
    const { execSync } = require('child_process')
    execSync('stty -echo', { stdio: ['inherit', 'inherit', 'inherit'] })

    let pw = ''
    try {
      while (true) {
        const n = fs.readSync(tty, buf, 0, 1, null)
        if (n === 0) break
        const ch = buf.slice(0, n).toString('utf8')
        if (ch === '\n' || ch === '\r') break
        if (ch === '\x7f' || ch === '\b') { pw = pw.slice(0, -1); continue }
        if (ch === '\x03') { execSync('stty echo'); process.exit(1) } // Ctrl-C
        pw += ch
      }
    } finally {
      execSync('stty echo', { stdio: ['inherit', 'inherit', 'inherit'] })
      fs.writeSync(tty, '\n')
      fs.closeSync(tty)
    }
    resolve(pw)
  })
}

async function main () {
  const password = await readPasswordFromTTY()

  if (!password || password.length < 8) {
    console.error('ERROR: Password must be at least 8 characters.')
    process.exit(1)
  }

  process.stdout.write('Hashing (this takes ~1 second)… ')
  const hash = await bcrypt.hash(password, 12)

  // Self-verify before touching any file
  const selfOk = await bcrypt.compare(password, hash)
  if (!selfOk) {
    console.error('\nERROR: Hash self-verification failed — aborting, .env.local unchanged.')
    process.exit(1)
  }

  // Read current .env.local
  if (!fs.existsSync(ENV_PATH)) {
    console.error('\nERROR: .env.local not found at', ENV_PATH)
    process.exit(1)
  }
  let content = fs.readFileSync(ENV_PATH, 'utf8')

  // Escape $ characters so dotenv-expand (used by @next/env / Next.js) does not
  // interpolate them as variable references. _resolveEscapeSequences restores \$ → $.
  const escapedHash = hash.replace(/\$/g, '\\$')

  // Replace or append the ADMIN_PASSWORD_HASH line
  const newLine = 'ADMIN_PASSWORD_HASH=' + escapedHash
  if (/^ADMIN_PASSWORD_HASH=.*$/m.test(content)) {
    content = content.replace(/^ADMIN_PASSWORD_HASH=.*$/m, newLine)
  } else {
    content = content.trimEnd() + '\n' + newLine + '\n'
  }

  fs.writeFileSync(ENV_PATH, content, 'utf8')

  // Re-read and re-verify what was actually written to disk
  const written = fs.readFileSync(ENV_PATH, 'utf8')
  const writtenRaw = written
    .split('\n')
    .find(l => l.startsWith('ADMIN_PASSWORD_HASH='))
    ?.slice('ADMIN_PASSWORD_HASH='.length)
    ?.trim()

  if (!writtenRaw) {
    console.error('\nERROR: ADMIN_PASSWORD_HASH not found in .env.local after write.')
    process.exit(1)
  }

  // Strip the backslash escapes to get the real hash for verification
  const writtenHash = writtenRaw.replace(/\\\$/g, '$')

  if (writtenHash.length !== 60) {
    console.error('\nERROR: Written hash has unexpected length:', writtenHash.length, '(expected 60). Aborting.')
    process.exit(1)
  }

  const writeOk = await bcrypt.compare(password, writtenHash)
  if (!writeOk) {
    console.error('\nERROR: Written hash does not verify — .env.local may be corrupt.')
    process.exit(1)
  }

  console.log('done.')
  console.log('\nSUCCESS: .env.local updated. Hash length:', writtenHash.length, '| Prefix:', writtenHash.slice(0, 7))
  console.log('\nNext step: restart your dev server so it loads the new hash.')
  console.log('  Kill the current server (Ctrl-C in its terminal), then run: npm run dev')
}

main().catch(err => { console.error('Unexpected error:', err.message); process.exit(1) })
