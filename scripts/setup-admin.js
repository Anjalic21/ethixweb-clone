#!/usr/bin/env node
/**
 * Securely updates ADMIN_PASSWORD_HASH in .env.local.
 *
 * - Prompts for password with hidden input (no echo, no shell history).
 * - Requires at least 12 characters.
 * - Prompts for confirmation to prevent lockouts.
 * - Hashes using bcryptjs with cost factor 12 (exact match with lib/auth.ts).
 * - Self-verifies the hash before touching .env.local.
 * - Safely updates ADMIN_PASSWORD_HASH in .env.local without touching other variables.
 * - Re-reads, unescapes, and verifies roundtrip matching against bcryptjs.
 * - Never prints the plain-text password or sensitive secrets to terminal.
 *
 * Usage:
 *   node scripts/setup-admin.js
 */

'use strict'

const bcrypt = require('bcryptjs')
const fs     = require('fs')
const path   = require('path')

const ENV_PATH = path.resolve(__dirname, '..', '.env.local')

let sharedRl = null

/**
 * Reads hidden password input from process.stdin without echoing characters.
 * Gracefully handles backspaces, Enter, Ctrl+C, and non-TTY fallback.
 */
function promptPassword(promptText) {
  return new Promise((resolve) => {
    process.stdout.write(promptText)

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true)
      process.stdin.resume()
      process.stdin.setEncoding('utf8')

      let input = ''
      const onData = (chunk) => {
        for (let i = 0; i < chunk.length; i++) {
          const char = chunk[i]
          if (char === '\n' || char === '\r' || char === '\u0004') {
            process.stdin.removeListener('data', onData)
            process.stdin.setRawMode(false)
            process.stdin.pause()
            process.stdout.write('\n')
            resolve(input)
            return
          } else if (char === '\u0003') { // Ctrl+C
            process.stdin.removeListener('data', onData)
            process.stdin.setRawMode(false)
            process.stdin.pause()
            process.stdout.write('\nAborted by user.\n')
            process.exit(130)
          } else if (char === '\u007f' || char === '\b') { // Backspace
            if (input.length > 0) {
              input = input.slice(0, -1)
            }
          } else if (char.charCodeAt(0) >= 32) {
            input += char
          }
        }
      }

      process.stdin.on('data', onData)
    } else {
      // Non-interactive fallback (e.g., piped stream)
      if (!sharedRl) {
        const readline = require('readline')
        sharedRl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: false,
        })
      }
      sharedRl.once('line', (line) => {
        resolve(line)
      })
    }
  })
}

async function main() {
  console.log('=== Ethixweb Secure Admin Password Update ===\n')

  const password = await promptPassword('Enter new admin password (hidden, min 12 characters): ')

  if (!password || password.trim().length === 0) {
    console.error('\nERROR: Password cannot be empty or whitespace.')
    process.exit(1)
  }

  if (password.length < 12) {
    console.error(`\nERROR: Password must be at least 12 characters long (received ${password.length} characters).`)
    process.exit(1)
  }

  const confirmPassword = await promptPassword('Confirm new admin password (hidden): ')

  if (password !== confirmPassword) {
    console.error('\nERROR: Passwords do not match. Aborting — no changes made.')
    process.exit(1)
  }

  process.stdout.write('\nGenerating bcrypt hash (cost factor 12)... ')
  const hash = await bcrypt.hash(password, 12)

  // 1. Self-verify before touching any file
  const selfCheck = await bcrypt.compare(password, hash)
  if (!selfCheck) {
    console.error('\nERROR: Hash self-verification failed. Aborting — .env.local unchanged.')
    process.exit(1)
  }

  // 2. Read or create .env.local
  let content = ''
  if (fs.existsSync(ENV_PATH)) {
    content = fs.readFileSync(ENV_PATH, 'utf8')
  } else {
    content = '# Local environment configuration\n'
  }

  // Escape $ so Next.js dotenv-expand does not evaluate $2a or $12 as empty shell variables
  const escapedHash = hash.replace(/\$/g, '\\$')
  const newLine = 'ADMIN_PASSWORD_HASH=' + escapedHash

  if (/^ADMIN_PASSWORD_HASH=.*$/m.test(content)) {
    content = content.replace(/^ADMIN_PASSWORD_HASH=.*$/m, newLine)
  } else {
    content = content.trimEnd() + '\n' + newLine + '\n'
  }

  fs.writeFileSync(ENV_PATH, content, 'utf8')

  // 3. Re-read and verify what was actually persisted to disk
  const written = fs.readFileSync(ENV_PATH, 'utf8')
  const writtenRaw = written
    .split('\n')
    .find((l) => l.startsWith('ADMIN_PASSWORD_HASH='))
    ?.slice('ADMIN_PASSWORD_HASH='.length)
    ?.trim()

  if (!writtenRaw) {
    console.error('\nERROR: ADMIN_PASSWORD_HASH not found in .env.local after write.')
    process.exit(1)
  }

  const writtenHash = writtenRaw.replace(/\\\$/g, '$')
  if (writtenHash.length !== 60) {
    console.error(`\nERROR: Written hash has unexpected length: ${writtenHash.length} (expected 60).`)
    process.exit(1)
  }

  const writeCheck = await bcrypt.compare(password, writtenHash)
  if (!writeCheck) {
    console.error('\nERROR: Written hash does not verify against entered password.')
    process.exit(1)
  }

  console.log('done.')
  console.log('\n✅ SUCCESS: .env.local has been safely updated with the new admin password hash.')
  console.log(`   - Algorithm: bcrypt (cost factor 12)`)
  console.log(`   - Hash verified: 60 characters`)
  console.log(`   - Plain-text password was never logged or saved to disk.\n`)
  console.log('Next steps:')
  console.log('1. If your development server is running, restart it to load the new hash:')
  console.log('   Press Ctrl+C in your server terminal, then run: npm run dev')
  console.log('2. Navigate to http://localhost:3000/admin/login and sign in with:')
  console.log('   - Your configured ADMIN_EMAIL')
  console.log('   - Your new password (min 12 chars)')
}

main().catch((err) => {
  console.error('\nUnexpected error:', err.message)
  process.exit(1)
})
