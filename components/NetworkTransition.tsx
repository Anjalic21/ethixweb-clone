'use client'

import React from 'react'

export default function NetworkTransition() {
  return (
    <div
      className="relative w-full overflow-hidden select-none py-4 sm:py-6"
      style={{
        background:
          'linear-gradient(180deg, #08090C 0%, #12070A 40%, #14080C 60%, #08090C 100%)',
      }}
      aria-hidden="true"
    >
      {/* Top and Bottom Feathering Masks to guarantee seamless blending */}
      <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#08090C] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#08090C] to-transparent pointer-events-none z-10" />

      {/* Center Subtle Network Metadata Pill */}
      <div className="relative z-10 flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3843] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[rgba(240,243,248,0.65)]">
            PAN-INDIA DIGITAL INFRASTRUCTURE &bull; SUB-SECOND LATENCY
          </span>
        </div>
      </div>

      {/* SVG Motion Canvas */}
      <div className="w-full max-w-[1240px] mx-auto h-36 sm:h-48 lg:h-56 relative">
        <svg
          viewBox="0 0 1100 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Glow filters */}
            <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radial glows */}
            <radialGradient id="hub-glow-bengaluru" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF3843" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#E51D25" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="hub-glow-delhi" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF4A54" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E51D25" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="line-delhi-mum" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E51D25" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF3843" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="line-mum-blr" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3843" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E08738" stopOpacity="0.35" />
            </linearGradient>

            <linearGradient id="line-blr-chn" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E08738" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF3843" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="line-fade-left" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#E51D25" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E51D25" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="line-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E51D25" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#E51D25" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* ── Ambient Radial Hub Halos ── */}
          <circle cx="505" cy="180" r="38" fill="url(#hub-glow-bengaluru)" />
          <circle cx="515" cy="50" r="34" fill="url(#hub-glow-delhi)" />
          <circle cx="435" cy="115" r="28" fill="url(#hub-glow-delhi)" opacity="0.6" />

          {/* ── Subtle Geometric Subcontinent Mesh / Constellation Contour ── */}
          <path
            d="M 515,16 L 475,40 L 450,75 L 415,100 L 435,115 L 450,140 L 485,175 L 505,180 L 525,215 L 545,190 L 565,150 L 610,120 L 650,95 L 685,85 L 670,65 L 620,60 L 560,40 Z"
            stroke="rgba(229, 29, 37, 0.12)"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            fill="rgba(138, 24, 28, 0.025)"
          />

          {/* ── Background Grid Latitudes & Longitudes ── */}
          <line x1="320" y1="50" x2="780" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="280" y1="120" x2="820" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="320" y1="180" x2="780" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="4 6" />

          {/* ── Peripheral Outer Mesh Interconnects (Fading outwards) ── */}
          <line x1="435" y1="115" x2="310" y2="90" stroke="url(#line-fade-left)" strokeWidth="0.8" />
          <line x1="435" y1="115" x2="260" y2="140" stroke="url(#line-fade-left)" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="505" y1="180" x2="330" y2="200" stroke="url(#line-fade-left)" strokeWidth="0.8" />
          <line x1="515" y1="50" x2="360" y2="40" stroke="url(#line-fade-left)" strokeWidth="0.8" strokeDasharray="3 4" />

          <line x1="650" y1="95" x2="790" y2="80" stroke="url(#line-fade-right)" strokeWidth="0.8" />
          <line x1="650" y1="95" x2="840" y2="135" stroke="url(#line-fade-right)" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="565" y1="185" x2="780" y2="195" stroke="url(#line-fade-right)" strokeWidth="0.8" />
          <line x1="515" y1="50" x2="730" y2="45" stroke="url(#line-fade-right)" strokeWidth="0.8" strokeDasharray="3 4" />

          {/* Peripheral Nodes */}
          <circle cx="310" cy="90" r="2" fill="rgba(240,243,248,0.25)" />
          <circle cx="260" cy="140" r="1.5" fill="rgba(240,243,248,0.2)" />
          <circle cx="330" cy="200" r="2" fill="rgba(240,243,248,0.25)" />
          <circle cx="360" cy="40" r="1.5" fill="rgba(240,243,248,0.2)" />

          <circle cx="790" cy="80" r="2" fill="rgba(240,243,248,0.25)" />
          <circle cx="840" cy="135" r="1.5" fill="rgba(240,243,248,0.2)" />
          <circle cx="780" cy="195" r="2" fill="rgba(240,243,248,0.25)" />
          <circle cx="730" cy="45" r="1.5" fill="rgba(240,243,248,0.2)" />

          {/* ── Primary Backbone Network Paths ── */}
          {/* Path 1: Delhi NCR -> Mumbai */}
          <path
            id="path-delhi-mumbai"
            d="M 515,50 Q 465,80 435,115"
            stroke="url(#line-delhi-mum)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Path 2: Mumbai -> Pune */}
          <path
            id="path-mumbai-pune"
            d="M 435,115 Q 445,125 455,130"
            stroke="rgba(229,29,37,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Path 3: Mumbai -> Bengaluru */}
          <path
            id="path-mumbai-blr"
            d="M 435,115 Q 460,150 505,180"
            stroke="url(#line-mum-blr)"
            strokeWidth="1.4"
            fill="none"
          />

          {/* Path 4: Mumbai -> Hyderabad */}
          <path
            id="path-mumbai-hyd"
            d="M 435,115 Q 480,122 525,132"
            stroke="rgba(229,29,37,0.35)"
            strokeWidth="1.1"
            fill="none"
          />

          {/* Path 5: Delhi NCR -> Hyderabad */}
          <path
            id="path-delhi-hyd"
            d="M 515,50 Q 520,90 525,132"
            stroke="rgba(229,29,37,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Path 6: Hyderabad -> Bengaluru */}
          <path
            id="path-hyd-blr"
            d="M 525,132 Q 515,155 505,180"
            stroke="rgba(255,56,67,0.45)"
            strokeWidth="1.3"
            fill="none"
          />

          {/* Path 7: Bengaluru -> Chennai */}
          <path
            id="path-blr-chennai"
            d="M 505,180 Q 535,182 565,185"
            stroke="url(#line-blr-chn)"
            strokeWidth="1.3"
            fill="none"
          />

          {/* Path 8: Hyderabad -> Chennai */}
          <path
            id="path-hyd-chennai"
            d="M 525,132 Q 545,160 565,185"
            stroke="rgba(229,29,37,0.35)"
            strokeWidth="1.1"
            fill="none"
          />

          {/* Path 9: Delhi NCR -> Kolkata */}
          <path
            id="path-delhi-kolkata"
            d="M 515,50 Q 585,68 650,95"
            stroke="rgba(229,29,37,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Path 10: Kolkata -> Hyderabad */}
          <path
            id="path-kolkata-hyd"
            d="M 650,95 Q 585,115 525,132"
            stroke="rgba(229,29,37,0.35)"
            strokeWidth="1.1"
            fill="none"
          />

          {/* Path 11: Kolkata -> Chennai */}
          <path
            id="path-kolkata-chennai"
            d="M 650,95 Q 610,145 565,185"
            stroke="rgba(229,29,37,0.3)"
            strokeWidth="1"
            fill="none"
          />

          {/* ── Traveling Light Particle Packets ── */}
          {/* Packet 1: Delhi -> Mumbai (Red) */}
          <circle r="2.5" fill="#FF4A54" filter="url(#glow-red)">
            <animateMotion
              path="M 515,50 Q 465,80 435,115"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Packet 2: Mumbai -> Bengaluru (Warm Ivory Highlight) */}
          <circle r="2.5" fill="#F5EAE0" filter="url(#glow-gold)">
            <animateMotion
              path="M 435,115 Q 460,150 505,180"
              dur="3.8s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </circle>

          {/* Packet 3: Bengaluru -> Chennai (Muted Saffron Highlight) */}
          <circle r="2.2" fill="#E08738" filter="url(#glow-gold)">
            <animateMotion
              path="M 505,180 Q 535,182 565,185"
              dur="2.8s"
              repeatCount="indefinite"
              begin="1.2s"
            />
          </circle>

          {/* Packet 4: Delhi -> Hyderabad -> Bengaluru (Red) */}
          <circle r="2.2" fill="#FF3843" filter="url(#glow-red)">
            <animateMotion
              path="M 515,50 Q 520,90 525,132 Q 515,155 505,180"
              dur="5.5s"
              repeatCount="indefinite"
              begin="2s"
            />
          </circle>

          {/* Packet 5: Kolkata -> Hyderabad (Warm Ivory) */}
          <circle r="2.2" fill="#F5EAE0" filter="url(#glow-gold)">
            <animateMotion
              path="M 650,95 Q 585,115 525,132"
              dur="4.8s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </circle>

          {/* ── Bengaluru & Delhi Radar Ping Rings ── */}
          <circle
            cx="505"
            cy="180"
            r="4"
            fill="none"
            stroke="#FF3843"
            strokeWidth="1"
            className="pulse-radar"
          />
          <circle
            cx="515"
            cy="50"
            r="4"
            fill="none"
            stroke="#FF3843"
            strokeWidth="1"
            className="pulse-radar-delay"
          />

          {/* ── Key City Nodes with Glowing Cores & Labels ── */}

          {/* 1. DELHI NCR */}
          <g>
            <circle cx="515" cy="50" r="5" fill="#E51D25" />
            <circle cx="515" cy="50" r="2" fill="#FFFFFF" />
            <text
              x="526"
              y="53"
              fill="rgba(240,243,248,0.55)"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              DELHI NCR
            </text>
          </g>

          {/* 2. MUMBAI */}
          <g>
            <circle cx="435" cy="115" r="4.5" fill="#E51D25" />
            <circle cx="435" cy="115" r="1.8" fill="#FFFFFF" />
            <text
              x="386"
              y="118"
              fill="rgba(240,243,248,0.55)"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              MUMBAI
            </text>
          </g>

          {/* 3. PUNE */}
          <g>
            <circle cx="455" cy="130" r="3" fill="#B32228" />
            <circle cx="455" cy="130" r="1.2" fill="#F0F3F8" />
            <text
              x="424"
              y="142"
              fill="rgba(240,243,248,0.4)"
              fontSize="8"
              fontFamily="monospace"
            >
              PUNE
            </text>
          </g>

          {/* 4. HYDERABAD */}
          <g>
            <circle cx="525" cy="132" r="4" fill="#E51D25" />
            <circle cx="525" cy="132" r="1.6" fill="#FFFFFF" />
            <text
              x="535"
              y="135"
              fill="rgba(240,243,248,0.55)"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              HYDERABAD
            </text>
          </g>

          {/* 5. BENGALURU (Tech Epicenter) */}
          <g>
            <circle cx="505" cy="180" r="5.5" fill="#FF3843" filter="url(#glow-red)" />
            <circle cx="505" cy="180" r="2.2" fill="#FFFFFF" />
            <text
              x="438"
              y="184"
              fill="rgba(255,255,255,0.85)"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.06em"
            >
              BENGALURU
            </text>
          </g>

          {/* 6. CHENNAI */}
          <g>
            <circle cx="565" cy="185" r="4" fill="#E51D25" />
            <circle cx="565" cy="185" r="1.5" fill="#FFFFFF" />
            <text
              x="576"
              y="188"
              fill="rgba(240,243,248,0.55)"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              CHENNAI
            </text>
          </g>

          {/* 7. KOLKATA */}
          <g>
            <circle cx="650" cy="95" r="4" fill="#E51D25" />
            <circle cx="650" cy="95" r="1.5" fill="#FFFFFF" />
            <text
              x="660"
              y="98"
              fill="rgba(240,243,248,0.55)"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              KOLKATA
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
