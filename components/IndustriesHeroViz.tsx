'use client'

import React, { useState } from 'react'
import {
  Store,
  HeartPulse,
  GraduationCap,
  Factory,
  Building2,
  UtensilsCrossed,
  Sparkles,
  Zap,
} from 'lucide-react'

// Indian Business Corridors & Nodes
const businessNodes = [
  { id: 'delhi', name: 'Delhi NCR', category: 'Enterprise & Retail', x: 505, y: 65, color: '#FF3843', size: 6 },
  { id: 'ahmedabad', name: 'Ahmedabad', category: 'MSMEs & Trade', x: 380, y: 120, color: '#E08738', size: 5 },
  { id: 'mumbai', name: 'Mumbai', category: 'D2C & Commerce', x: 395, y: 165, color: '#FF3843', size: 6.5 },
  { id: 'pune', name: 'Pune', category: 'Industrial & Auto', x: 425, y: 185, color: '#FF4A54', size: 5 },
  { id: 'hyderabad', name: 'Hyderabad', category: 'Tech & Healthcare', x: 505, y: 195, color: '#FF3843', size: 5.5 },
  { id: 'bengaluru', name: 'Bengaluru', category: 'Innovation & Startups', x: 480, y: 255, color: '#FF3843', size: 7 },
  { id: 'chennai', name: 'Chennai', category: 'Manufacturing & Ports', x: 545, y: 260, color: '#E08738', size: 5.5 },
  { id: 'kolkata', name: 'Kolkata', category: 'Eastern Hub', x: 675, y: 135, color: '#FF4A54', size: 5 },
]

export default function IndustriesHeroViz() {
  const [activeNode, setActiveNode] = useState<string | null>('bengaluru')

  return (
    <div className="relative w-full max-w-[580px] mx-auto aspect-square flex items-center justify-center select-none">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-full blur-[90px] opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(229,29,37,0.45) 0%, rgba(138,24,28,0.2) 45%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -left-6 w-52 h-52 rounded-full blur-[70px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(224,135,56,0.35) 0%, transparent 70%)',
        }}
      />

      {/* Main SVG Visualization Canvas */}
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible relative z-10"
        aria-label="Interactive map illustration showing India's connected digital business corridors"
      >
        <defs>
          {/* Subtle Glow Filters */}
          <filter id="glow-red-node" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-gold-node" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial Hub Glows */}
          <radialGradient id="hub-epicenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF3843" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#E51D25" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8A181C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Geometric Concentric Radar Latitudes ── */}
        <circle cx="480" cy="210" r="90" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="480" cy="210" r="160" stroke="rgba(229,29,37,0.06)" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="480" cy="210" r="230" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" strokeDasharray="2 6" />

        {/* ── Subcontinent Stylized Boundary / Constellation Contour ── */}
        <path
          d="M 505,40 L 460,65 L 420,95 L 380,120 L 395,165 L 425,185 L 450,225 L 480,255 L 505,310 L 525,285 L 545,260 L 575,210 L 625,160 L 675,135 L 720,115 L 705,90 L 640,80 L 580,55 Z"
          stroke="rgba(229, 29, 37, 0.16)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="rgba(138, 24, 28, 0.03)"
        />

        {/* ── Ambient Radial Glows at Major Hubs ── */}
        <circle cx="480" cy="255" r="55" fill="url(#hub-epicenter)" />
        <circle cx="505" cy="65" r="45" fill="url(#hub-epicenter)" />
        <circle cx="395" cy="165" r="40" fill="url(#hub-epicenter)" opacity="0.8" />

        {/* ── Radar Pulse Ping Rings ── */}
        <circle cx="480" cy="255" r="8" fill="none" stroke="#FF3843" strokeWidth="1.2" className="pulse-radar" />
        <circle cx="505" cy="65" r="6" fill="none" stroke="#FF4A54" strokeWidth="1" className="pulse-radar-delay" />

        {/* ── Primary Business Corridor Network Lines ── */}
        {/* Delhi NCR -> Ahmedabad */}
        <path d="M 505,65 Q 440,85 380,120" stroke="rgba(229,29,37,0.3)" strokeWidth="1.2" fill="none" />
        {/* Ahmedabad -> Mumbai */}
        <path d="M 380,120 Q 385,145 395,165" stroke="rgba(224,135,56,0.35)" strokeWidth="1.2" fill="none" />
        {/* Delhi NCR -> Mumbai */}
        <path id="corridor-delhi-mum" d="M 505,65 Q 450,110 395,165" stroke="rgba(229,29,37,0.4)" strokeWidth="1.4" fill="none" />
        {/* Mumbai -> Pune */}
        <path d="M 395,165 L 425,185" stroke="rgba(255,56,67,0.5)" strokeWidth="1.4" fill="none" />
        {/* Pune -> Bengaluru */}
        <path id="corridor-pune-blr" d="M 425,185 Q 450,220 480,255" stroke="rgba(229,29,37,0.45)" strokeWidth="1.5" fill="none" />
        {/* Mumbai -> Hyderabad */}
        <path d="M 395,165 Q 450,175 505,195" stroke="rgba(229,29,37,0.35)" strokeWidth="1.2" fill="none" />
        {/* Delhi NCR -> Hyderabad */}
        <path id="corridor-delhi-hyd" d="M 505,65 Q 510,130 505,195" stroke="rgba(229,29,37,0.38)" strokeWidth="1.3" fill="none" />
        {/* Hyderabad -> Bengaluru */}
        <path id="corridor-hyd-blr" d="M 505,195 Q 490,225 480,255" stroke="rgba(255,56,67,0.5)" strokeWidth="1.5" fill="none" />
        {/* Bengaluru -> Chennai */}
        <path id="corridor-blr-chn" d="M 480,255 Q 515,258 545,260" stroke="rgba(224,135,56,0.45)" strokeWidth="1.5" fill="none" />
        {/* Hyderabad -> Chennai */}
        <path d="M 505,195 Q 530,225 545,260" stroke="rgba(229,29,37,0.3)" strokeWidth="1.1" fill="none" />
        {/* Delhi NCR -> Kolkata */}
        <path id="corridor-delhi-kol" d="M 505,65 Q 590,90 675,135" stroke="rgba(229,29,37,0.35)" strokeWidth="1.2" fill="none" />
        {/* Kolkata -> Hyderabad */}
        <path d="M 675,135 Q 590,165 505,195" stroke="rgba(229,29,37,0.3)" strokeWidth="1.1" fill="none" />
        {/* Kolkata -> Chennai */}
        <path d="M 675,135 Q 610,210 545,260" stroke="rgba(229,29,37,0.25)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

        {/* ── Traveling Light Packets (High Concurrency Data Motion) ── */}
        <circle r="2.8" fill="#FF4A54" filter="url(#glow-red-node)">
          <animateMotion path="M 505,65 Q 450,110 395,165" dur="4.2s" repeatCount="indefinite" />
        </circle>
        <circle r="2.8" fill="#F5EAE0" filter="url(#glow-gold-node)">
          <animateMotion path="M 425,185 Q 450,220 480,255" dur="3.4s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle r="2.5" fill="#E08738" filter="url(#glow-gold-node)">
          <animateMotion path="M 480,255 Q 515,258 545,260" dur="2.5s" repeatCount="indefinite" begin="1.1s" />
        </circle>
        <circle r="2.6" fill="#FF3843" filter="url(#glow-red-node)">
          <animateMotion path="M 505,65 Q 510,130 505,195 Q 490,225 480,255" dur="5.2s" repeatCount="indefinite" begin="1.8s" />
        </circle>
        <circle r="2.5" fill="#F5EAE0" filter="url(#glow-gold-node)">
          <animateMotion path="M 505,65 Q 590,90 675,135" dur="4.8s" repeatCount="indefinite" begin="0.9s" />
        </circle>

        {/* ── Business Nodes Rendering ── */}
        {businessNodes.map((node) => {
          const isSelected = activeNode === node.id
          return (
            <g
              key={node.id}
              className="cursor-pointer group/node"
              onMouseEnter={() => setActiveNode(node.id)}
              onClick={() => setActiveNode(node.id)}
            >
              {/* Outer halo on hover/active */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isSelected ? node.size + 7 : node.size + 4}
                fill={node.color}
                opacity={isSelected ? 0.35 : 0.12}
                className="transition-all duration-300"
              />
              {/* Core Node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isSelected ? node.size + 1.5 : node.size}
                fill={node.color}
                filter="url(#glow-red-node)"
                className="transition-all duration-300"
              />
              <circle cx={node.x} cy={node.y} r={node.size * 0.4} fill="#FFFFFF" />

              {/* Node Label */}
              <text
                x={node.x + 10}
                y={node.y + 3}
                fill={isSelected ? '#FFFFFF' : 'rgba(240,243,248,0.7)'}
                fontSize={isSelected ? '10' : '8.5'}
                fontFamily="monospace"
                fontWeight={isSelected ? 'bold' : 'normal'}
                letterSpacing="0.04em"
                className="transition-all duration-200 pointer-events-none select-none"
              >
                {node.name.toUpperCase()}
              </text>
            </g>
          )
        })}
      </svg>

      {/* ── Layered Floating Micro-Cards (India-First Proof Points) ── */}

      {/* Floating Card 1: Top Left — UPI & Mobile Commerce */}
      <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-6 z-20 rounded-2xl p-3 sm:p-3.5 bg-[#14080B]/90 border border-white/12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#E51D25]/40 hover:-translate-y-0.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E51D25]/15 border border-[#E51D25]/30 flex items-center justify-center text-[#FF3843]">
            <Store size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-white tracking-tight">UPI &amp; Mobile-First</span>
            </div>
            <p className="text-[10px] font-mono text-white/50">82%+ Mobile Traffic in India</p>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Bottom Right — Pan-India MSME & B2B Hub */}
      <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 z-20 rounded-2xl p-3 sm:p-3.5 bg-[#14080B]/90 border border-white/12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#E51D25]/40 hover:-translate-y-0.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E08738]/15 border border-[#E08738]/30 flex items-center justify-center text-[#E08738]">
            <Factory size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-white tracking-tight">Industrial MSME Reach</span>
            </div>
            <p className="text-[10px] font-mono text-white/50">Tier 1 · 2 · 3 Regional Hubs</p>
          </div>
        </div>
      </div>

      {/* Floating Card 3: Center-Bottom — Active Node Pill */}
      {activeNode && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full px-4 py-1.5 bg-[#19090D]/95 border border-[#E51D25]/35 shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none transition-all">
          <span className="w-2 h-2 rounded-full bg-[#FF3843] animate-ping" />
          <span className="text-xs font-mono font-bold text-white">
            {businessNodes.find((n) => n.id === activeNode)?.name}:
          </span>
          <span className="text-xs text-[#FF858B] font-medium">
            {businessNodes.find((n) => n.id === activeNode)?.category}
          </span>
        </div>
      )}
    </div>
  )
}
