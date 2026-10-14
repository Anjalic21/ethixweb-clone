'use client'

import React, { useState } from 'react'

interface HubNode {
  id: string
  name: string
  spec: string
  x: number
  y: number
  labelPos: 'left' | 'right' | 'top' | 'bottom'
  color: string
  isPrimary?: boolean
}

// Major Indian Technology and Business Hubs positioned accurately on the India projection
const indianHubs: HubNode[] = [
  { id: 'delhi', name: 'DELHI NCR', spec: 'Enterprise & Trade Hub', x: 265, y: 205, labelPos: 'right', color: '#FF3843', isPrimary: true },
  { id: 'ahmedabad', name: 'AHMEDABAD', spec: 'MSME & Commerce', x: 215, y: 248, labelPos: 'left', color: '#E08738' },
  { id: 'mumbai', name: 'MUMBAI', spec: 'Financial & D2C Capital', x: 222, y: 288, labelPos: 'left', color: '#FF3843', isPrimary: true },
  { id: 'pune', name: 'PUNE', spec: 'Manufacturing & Tech', x: 236, y: 302, labelPos: 'left', color: '#FF4A54' },
  { id: 'hyderabad', name: 'HYDERABAD', spec: 'Pharma & IT Center', x: 272, y: 310, labelPos: 'right', color: '#FF3843', isPrimary: true },
  { id: 'bengaluru', name: 'BENGALURU', spec: 'Innovation Epicenter', x: 258, y: 352, labelPos: 'left', color: '#FF3843', isPrimary: true },
  { id: 'chennai', name: 'CHENNAI', spec: 'Auto & Port Gateway', x: 288, y: 354, labelPos: 'right', color: '#E08738' },
  { id: 'kolkata', name: 'KOLKATA', spec: 'Eastern Commercial Hub', x: 342, y: 246, labelPos: 'right', color: '#FF4A54' },
]

export default function GlobeViz() {
  const [activeHub, setActiveHub] = useState<string | null>(null)

  return (
    <div
      className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] mx-auto select-none"
      style={{ aspectRatio: '1 / 1' }}
      role="region"
      aria-label="Interactive animated 3D visualization of India's connected digital business network"
    >
      {/* ── Ambient Background Lighting Gradients ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-full blur-[90px] opacity-45"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(229,29,37,0.42) 0%, rgba(138,24,28,0.22) 45%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-10 w-64 h-64 rounded-full blur-[60px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(224,135,56,0.3) 0%, transparent 70%)',
        }}
      />

      {/* ── Main SVG Graphic (Layered 2.5D Digital Ecosystem) ── */}
      <svg
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          {/* Deep obsidian & burgundy globe sphere gradient */}
          <radialGradient id="sphereGradient" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#1E070C" stopOpacity="0.98" />
            <stop offset="40%" stopColor="#120508" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#08080C" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#040407" stopOpacity="1" />
          </radialGradient>

          {/* Atmospheric Rim Lighting */}
          <radialGradient id="rimLighting" cx="50%" cy="50%" r="50%">
            <stop offset="88%" stopColor="#E51D25" stopOpacity="0" />
            <stop offset="97%" stopColor="#FF3843" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#E51D25" stopOpacity="0.65" />
          </radialGradient>

          {/* Soft and intense glow filters */}
          <filter id="intenseRedGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* India landmass fill gradient */}
          <linearGradient id="indiaLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3843" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#B32228" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#E08738" stopOpacity="0.18" />
          </linearGradient>

          {/* Brand E Shield Gradient */}
          <linearGradient id="brandShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4A54" />
            <stop offset="50%" stopColor="#E51D25" />
            <stop offset="100%" stopColor="#8A181C" />
          </linearGradient>

          {/* Outer Orbital Ring Gradient */}
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3843" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E08738" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E51D25" stopOpacity="0.1" />
          </linearGradient>

          {/* Globe Surface Clip Path */}
          <clipPath id="globeSurfaceClip">
            <circle cx="270" cy="270" r="162" />
          </clipPath>
        </defs>

        {/* ── Layer 1: Outer Orbital Rings with Staggered Rotation ── */}
        <g className="orbit-ring-spin">
          <ellipse
            cx="270"
            cy="270"
            rx="245"
            ry="92"
            transform="rotate(-28 270 270)"
            stroke="url(#orbitGrad)"
            strokeWidth="1.2"
            strokeDasharray="8 14 24 12"
            opacity="0.65"
          />
          <ellipse
            cx="270"
            cy="270"
            rx="248"
            ry="94"
            transform="rotate(-28 270 270)"
            stroke="#E51D25"
            strokeWidth="0.5"
            strokeDasharray="2 6"
            opacity="0.3"
          />
        </g>

        <g className="orbit-ring-reverse">
          <ellipse
            cx="270"
            cy="270"
            rx="215"
            ry="78"
            transform="rotate(32 270 270)"
            stroke="#E51D25"
            strokeWidth="1"
            strokeDasharray="6 10"
            opacity="0.4"
          />
        </g>

        {/* Outer Tech Coordinate Markers */}
        <g stroke="#E51D25" strokeOpacity="0.35" strokeWidth="1">
          <line x1="270" y1="18" x2="270" y2="34" />
          <line x1="270" y1="506" x2="270" y2="522" />
          <line x1="18" y1="270" x2="34" y2="270" />
          <line x1="506" y1="270" x2="522" y2="270" />
          {/* Subtle 45° Corner ticks */}
          <line x1="92" y1="92" x2="104" y2="104" strokeWidth="0.8" strokeOpacity="0.2" />
          <line x1="448" y1="92" x2="436" y2="104" strokeWidth="0.8" strokeOpacity="0.2" />
          <line x1="92" y1="448" x2="104" y2="436" strokeWidth="0.8" strokeOpacity="0.2" />
          <line x1="448" y1="448" x2="436" y2="436" strokeWidth="0.8" strokeOpacity="0.2" />
        </g>

        {/* ── Layer 2: 3D Globe Base Sphere ── */}
        <circle
          cx="270"
          cy="270"
          r="162"
          fill="url(#sphereGradient)"
          stroke="#E51D25"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          filter="url(#intenseRedGlow)"
        />
        {/* Atmospheric rim overlay */}
        <circle cx="270" cy="270" r="162" fill="url(#rimLighting)" />

        {/* ── Layer 3: Globe Surface Graticule & Elements (Clipped inside sphere) ── */}
        <g clipPath="url(#globeSurfaceClip)">
          {/* Parallels / Latitudes with Perspective Curvature */}
          <g stroke="#E51D25" strokeWidth="0.75" strokeOpacity="0.16">
            <ellipse cx="270" cy="155" rx="128" ry="24" />
            <ellipse cx="270" cy="210" rx="152" ry="30" />
            <ellipse cx="270" cy="270" rx="162" ry="36" />
            <ellipse cx="270" cy="330" rx="152" ry="30" />
            <ellipse cx="270" cy="385" rx="128" ry="24" />
          </g>

          {/* Meridians / Longitudes */}
          <g stroke="#E51D25" strokeWidth="0.75" strokeOpacity="0.18">
            <ellipse cx="270" cy="270" rx="38" ry="162" />
            <ellipse cx="270" cy="270" rx="86" ry="162" />
            <ellipse cx="270" cy="270" rx="132" ry="162" />
            <line x1="270" y1="108" x2="270" y2="432" strokeWidth="0.8" strokeDasharray="3 3" />
          </g>

          {/* Surrounding Continental Hints (Middle East, Central Asia, Bay of Bengal islands) */}
          <path
            d="M 175,230 L 205,238 L 195,268 L 170,265 Z"
            fill="rgba(229,29,37,0.05)"
            stroke="rgba(229,29,37,0.18)"
            strokeWidth="0.8"
          />
          <path
            d="M 345,280 L 375,285 L 390,320 L 360,335 Z"
            fill="rgba(229,29,37,0.05)"
            stroke="rgba(229,29,37,0.18)"
            strokeWidth="0.8"
          />

          {/* ── Recognizable Silhouette of the Indian Subcontinent ── */}
          {/*
              Detailed geometric vector path of India:
              - Kashmir / Northern Crown (apex around 268, 160)
              - Punjab / Rajasthan bulge (245, 195 -> 225, 220)
              - Gujarat / Rann of Kutch & Kathiawar peninsula (205, 240 -> 195, 255 -> 215, 270)
              - Western Ghats / Konkan down to Goa & Kerala (218, 285 -> 232, 320 -> 248, 365)
              - Kanyakumari apex (258, 395)
              - Coromandel / Eastern coast (278, 365 -> 288, 335 -> 295, 300)
              - Odisha / Bay of Bengal curve (315, 268 -> 338, 250)
              - Bengal & Sundarbans inlet (342, 242)
              - Northeast passage to Assam / Meghalaya (355, 230 -> 380, 222 -> 370, 210)
              - Northern Himalayan border back to Kashmir (330, 195 -> 295, 175 -> 268, 160)
          */}
          <path
            d="M 268,160 
               L 278,168 
               L 282,185 
               L 295,175 
               L 330,195 
               L 355,230 
               L 380,222 
               L 370,210 
               L 350,220 
               L 342,242 
               L 338,250 
               L 315,268 
               L 295,300 
               L 288,335 
               L 278,365 
               L 258,395 
               L 248,365 
               L 232,320 
               L 218,285 
               L 215,270 
               L 195,255 
               L 205,240 
               L 225,220 
               L 245,195 
               Z"
            fill="url(#indiaLandGradient)"
            stroke="#FF3843"
            strokeWidth="1.6"
            strokeOpacity="0.75"
            filter="url(#subtleGlow)"
          />

          {/* Sri Lanka Silhouette Marker */}
          <ellipse
            cx="280"
            cy="405"
            rx="4"
            ry="7"
            transform="rotate(15 280 405)"
            fill="rgba(229,29,37,0.18)"
            stroke="#FF3843"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />

          {/* ── Domestic Commerce & Data Interconnect Paths (Curved Beziers) ── */}
          <g strokeWidth="1.3" fill="none">
            {/* Delhi NCR -> Mumbai */}
            <path
              id="path-delhi-mumbai"
              d="M 265,205 Q 235,245 222,288"
              stroke="rgba(255,56,67,0.55)"
            />
            {/* Mumbai -> Pune */}
            <path
              d="M 222,288 L 236,302"
              stroke="rgba(255,56,67,0.6)"
            />
            {/* Pune -> Bengaluru */}
            <path
              id="path-pune-blr"
              d="M 236,302 Q 245,328 258,352"
              stroke="rgba(229,29,37,0.6)"
            />
            {/* Delhi NCR -> Hyderabad */}
            <path
              id="path-delhi-hyd"
              d="M 265,205 Q 272,255 272,310"
              stroke="rgba(224,135,56,0.5)"
            />
            {/* Hyderabad -> Bengaluru */}
            <path
              id="path-hyd-blr"
              d="M 272,310 Q 265,330 258,352"
              stroke="rgba(255,56,67,0.65)"
            />
            {/* Bengaluru -> Chennai */}
            <path
              id="path-blr-chennai"
              d="M 258,352 Q 274,354 288,354"
              stroke="rgba(224,135,56,0.6)"
            />
            {/* Delhi NCR -> Kolkata */}
            <path
              id="path-delhi-kolkata"
              d="M 265,205 Q 310,218 342,246"
              stroke="rgba(255,56,67,0.5)"
            />
            {/* Kolkata -> Hyderabad */}
            <path
              d="M 342,246 Q 305,275 272,310"
              stroke="rgba(229,29,37,0.4)"
            />
            {/* Ahmedabad -> Mumbai */}
            <path
              d="M 215,248 Q 216,268 222,288"
              stroke="rgba(224,135,56,0.5)"
            />
          </g>

          {/* ── Traveling Light Particle Streams (Animated Motion) ── */}
          {/* Packet 1: Delhi -> Mumbai (Red) */}
          <circle r="2.8" fill="#FF4A54" filter="url(#intenseRedGlow)">
            <animateMotion
              path="M 265,205 Q 235,245 222,288"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Packet 2: Mumbai -> Pune -> Bengaluru (Warm Ivory) */}
          <circle r="2.6" fill="#F5EAE0" filter="url(#subtleGlow)">
            <animateMotion
              path="M 222,288 L 236,302 Q 245,328 258,352"
              dur="3.2s"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </circle>

          {/* Packet 3: Bengaluru -> Chennai (Saffron Highlight) */}
          <circle r="2.4" fill="#E08738" filter="url(#subtleGlow)">
            <animateMotion
              path="M 258,352 Q 274,354 288,354"
              dur="2.2s"
              repeatCount="indefinite"
              begin="1.2s"
            />
          </circle>

          {/* Packet 4: Delhi -> Hyderabad -> Bengaluru */}
          <circle r="2.6" fill="#FF3843" filter="url(#intenseRedGlow)">
            <animateMotion
              path="M 265,205 Q 272,255 272,310 Q 265,330 258,352"
              dur="4.5s"
              repeatCount="indefinite"
              begin="1.8s"
            />
          </circle>

          {/* Packet 5: Delhi -> Kolkata */}
          <circle r="2.5" fill="#F5EAE0" filter="url(#subtleGlow)">
            <animateMotion
              path="M 265,205 Q 310,218 342,246"
              dur="4.2s"
              repeatCount="indefinite"
              begin="0.9s"
            />
          </circle>

          {/* ── Regional Radar Pulses at Epicenters ── */}
          {/* Bengaluru (Primary Innovation Hub) */}
          <circle cx="258" cy="352" r="5" fill="none" stroke="#FF3843" strokeWidth="1.2" className="pulse-radar" />
          <circle cx="258" cy="352" r="5" fill="none" stroke="#E51D25" strokeWidth="0.8" className="pulse-radar-delay" />

          {/* Delhi NCR */}
          <circle cx="265" cy="205" r="4.5" fill="none" stroke="#FF4A54" strokeWidth="1" className="pulse-radar-delay" />

          {/* Mumbai */}
          <circle cx="222" cy="288" r="4.5" fill="none" stroke="#FF3843" strokeWidth="1" className="pulse-radar" />

          {/* ── Indian Business Hub Nodes with Hover & Interaction ── */}
          {indianHubs.map((hub) => {
            const isHovered = activeHub === hub.id
            const isPrimary = hub.isPrimary
            return (
              <g
                key={hub.id}
                className="cursor-pointer group/hub"
                onMouseEnter={() => setActiveHub(hub.id)}
                onMouseLeave={() => setActiveHub(null)}
              >
                {/* Outer halo */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isHovered ? 12 : isPrimary ? 8 : 6}
                  fill={hub.color}
                  opacity={isHovered ? 0.4 : isPrimary ? 0.22 : 0.12}
                  className="transition-all duration-300"
                />

                {/* Core Dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isHovered ? 4.5 : isPrimary ? 3.5 : 2.8}
                  fill={isHovered ? '#FFFFFF' : hub.color}
                  filter="url(#intenseRedGlow)"
                  className="transition-all duration-200"
                />
                <circle cx={hub.x} cy={hub.y} r={1.5} fill="#FFFFFF" />

                {/* City Label with high contrast background pill for maximum legibility */}
                <g className="pointer-events-none select-none">
                  {hub.labelPos === 'right' ? (
                    <>
                      <rect
                        x={hub.x + 7}
                        y={hub.y - 7}
                        width={hub.name.length * 5.8 + 8}
                        height={13}
                        rx={3}
                        fill="#0B0609"
                        fillOpacity="0.85"
                        stroke={isHovered ? '#E51D25' : 'rgba(255,255,255,0.1)'}
                        strokeWidth="0.6"
                      />
                      <text
                        x={hub.x + 11}
                        y={hub.y + 2.5}
                        fill={isHovered ? '#FFFFFF' : 'rgba(240,243,248,0.85)'}
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="bold"
                        letterSpacing="0.06em"
                      >
                        {hub.name}
                      </text>
                    </>
                  ) : (
                    <>
                      <rect
                        x={hub.x - hub.name.length * 5.8 - 14}
                        y={hub.y - 7}
                        width={hub.name.length * 5.8 + 8}
                        height={13}
                        rx={3}
                        fill="#0B0609"
                        fillOpacity="0.85"
                        stroke={isHovered ? '#E51D25' : 'rgba(255,255,255,0.1)'}
                        strokeWidth="0.6"
                      />
                      <text
                        x={hub.x - hub.name.length * 5.8 - 10}
                        y={hub.y + 2.5}
                        fill={isHovered ? '#FFFFFF' : 'rgba(240,243,248,0.85)'}
                        fontSize="7.5"
                        fontFamily="monospace"
                        fontWeight="bold"
                        letterSpacing="0.06em"
                      >
                        {hub.name}
                      </text>
                    </>
                  )}
                </g>
              </g>
            )
          })}
        </g>

        {/* ── Layer 4: Central Holographic Ethixweb "E" Monogram ── */}
        <g className="brand-hologram" transform="translate(240, 240)">
          {/* Outer glowing shield frame */}
          <rect
            x="-4"
            y="-4"
            width="68"
            height="68"
            rx="18"
            fill="#090609"
            fillOpacity="0.94"
            stroke="url(#brandShieldGrad)"
            strokeWidth="1.8"
            filter="url(#intenseRedGlow)"
          />

          {/* Micro Geometric Background Texture */}
          <path
            d="M 10,12 H 50 M 10,24 H 50 M 10,36 H 50 M 10,48 H 50"
            stroke="#E51D25"
            strokeOpacity="0.14"
            strokeWidth="0.8"
          />

          {/* Modern Architectural "E" Mark */}
          <g transform="translate(18, 16)">
            {/* Top horizontal stroke */}
            <path
              d="M 0,0 H 24 C 25.5,0 26,1 26,2.5 C 26,4 25.5,5 24,5 H 5 V 23 C 5,24.5 4,25.5 2.5,25.5 C 1,25.5 0,24.5 0,23 Z"
              fill="#FFFFFF"
            />
            {/* Red center brand bar */}
            <rect x="5" y="11" width="16" height="4.5" rx="1.5" fill="#E51D25" />
            {/* Bottom horizontal stroke */}
            <path
              d="M 0,22 H 24 C 25.5,22 26,23 26,24.5 C 26,26 25.5,27 24,27 H 0 Z"
              fill="#FFFFFF"
              fillOpacity="0.92"
            />
          </g>

          {/* Live System Indicator Dot */}
          <circle cx="51" cy="12" r="3" fill="#22C55E" filter="url(#subtleGlow)" />
        </g>
      </svg>

      {/* ── Layer 5: Tasteful Floating Proof Points & Activity Badges ── */}

      {/* Badge 1: Top-Right — India Digital Network */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-0 z-20 rounded-2xl p-3 sm:p-3.5 bg-[#14080B]/90 border border-white/12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#E51D25]/40 hover:-translate-y-0.5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#FF3843] animate-pulse" />
          <div>
            <div className="text-[11px] font-bold text-white tracking-tight">INDIA DIGITAL NETWORK</div>
            <p className="text-[10px] font-mono text-white/50">8 Connected Metro Hubs</p>
          </div>
        </div>
      </div>

      {/* Badge 2: Bottom-Left — Mobile-First Commerce */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-2 z-20 rounded-2xl p-3 sm:p-3.5 bg-[#14080B]/90 border border-white/12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#E51D25]/40 hover:-translate-y-0.5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <div className="text-[11px] font-bold text-white tracking-tight">DIGITAL COMMERCE</div>
            <p className="text-[10px] font-mono text-white/50">Instant UPI &amp; Mobile-First</p>
          </div>
        </div>
      </div>

      {/* Dynamic Hover Tooltip Pill (Active Hub details when user hovers a city) */}
      {activeHub && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full px-4 py-1.5 bg-[#1A080C]/95 border border-[#E51D25]/40 shadow-2xl backdrop-blur-md flex items-center gap-2 pointer-events-none transition-all">
          <span className="w-2 h-2 rounded-full bg-[#FF3843] animate-ping" />
          <span className="text-xs font-mono font-bold text-white">
            {indianHubs.find((h) => h.id === activeHub)?.name}:
          </span>
          <span className="text-xs text-[#FF858B] font-medium">
            {indianHubs.find((h) => h.id === activeHub)?.spec}
          </span>
        </div>
      )}
    </div>
  )
}
