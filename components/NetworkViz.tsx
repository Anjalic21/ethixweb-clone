// Pure server component — no 'use client' needed.
// All animation is driven by CSS keyframes defined in globals.css.

export default function NetworkViz() {
  // Node positions [cx, cy] — designed around a 480×480 viewBox
  const center = { x: 240, y: 240 }

  const ring1 = [
    { x: 240, y: 130 },
    { x: 330, y: 185 },
    { x: 330, y: 295 },
    { x: 240, y: 350 },
    { x: 150, y: 295 },
    { x: 150, y: 185 },
  ]

  const ring2 = [
    { x: 240, y: 52 },
    { x: 370, y: 100 },
    { x: 428, y: 220 },
    { x: 400, y: 360 },
    { x: 280, y: 428 },
    { x: 140, y: 410 },
    { x: 60,  y: 300 },
    { x: 72,  y: 160 },
    { x: 180, y: 68 },
  ]

  // Floating label positions
  const labels = [
    { x: 340, y: 96,  text: 'Web Dev' },
    { x: 390, y: 230, text: 'Mobile' },
    { x: 290, y: 420, text: 'SEO' },
    { x: 68,  y: 190, text: 'UI/UX' },
  ]

  // Build edges: center → ring1, ring1 → ring2 (nearest), ring1 internal
  const edges: Array<[number, number, number, number]> = []

  // Center to ring1
  ring1.forEach((n) => edges.push([center.x, center.y, n.x, n.y]))

  // Ring1 to adjacent ring1 (hexagon sides)
  ring1.forEach((n, i) => {
    const next = ring1[(i + 1) % ring1.length]
    edges.push([n.x, n.y, next.x, next.y])
  })

  // Ring1 to nearest ring2 nodes
  const r1r2pairs: [number, number][] = [
    [0, 0], [0, 1],
    [1, 2], [1, 3],
    [2, 3], [2, 4],
    [3, 5], [3, 6],
    [4, 6], [4, 7],
    [5, 7], [5, 8],
  ]
  r1r2pairs.forEach(([r1i, r2i]) => {
    if (ring1[r1i] && ring2[r2i]) {
      edges.push([ring1[r1i].x, ring1[r1i].y, ring2[r2i].x, ring2[r2i].y])
    }
  })

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[480px] mx-auto select-none"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(139,24,28,0.22) 0%, transparent 70%)',
        }}
      />

      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Abstract digital network visualization"
      >
        {/* ── Edges ── */}
        <g stroke="#E51D25" strokeOpacity="0.18" strokeWidth="0.8">
          {edges.map(([x1, y1, x2, y2], i) => (
            <line key={`e-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>

        {/* ── Animated dashed accent edges (subset) ── */}
        <g stroke="#E51D25" strokeOpacity="0.35" strokeWidth="0.9">
          {ring1.slice(0, 3).map((n, i) => (
            <line
              key={`da-${i}`}
              x1={center.x} y1={center.y}
              x2={n.x} y2={n.y}
              className="net-line"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </g>

        {/* ── Ring 2 nodes ── */}
        {ring2.map((n, i) => (
          <circle
            key={`r2-${i}`}
            cx={n.x} cy={n.y} r={2.5}
            fill="#E51D25"
            fillOpacity="0.35"
            className="net-node"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* ── Ring 1 nodes ── */}
        {ring1.map((n, i) => (
          <g key={`r1-${i}`}>
            {/* Outer ring */}
            <circle
              cx={n.x} cy={n.y} r={6}
              stroke="#E51D25" strokeOpacity="0.20" strokeWidth="1"
              fill="none"
            />
            {/* Inner dot */}
            <circle
              cx={n.x} cy={n.y} r={3}
              fill="#E51D25" fillOpacity="0.55"
              className="net-node"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}

        {/* ── Center node ── */}
        <circle cx={240} cy={240} r={22} stroke="#E51D25" strokeOpacity="0.12" strokeWidth="1" fill="none" />
        <circle cx={240} cy={240} r={14} stroke="#E51D25" strokeOpacity="0.22" strokeWidth="1" fill="none" />
        <circle
          cx={240} cy={240} r={7}
          fill="#E51D25" fillOpacity="0.80"
          className="net-node-center"
        />

        {/* ── Floating labels ── */}
        {labels.map(({ x, y, text }, i) => (
          <g key={`lbl-${i}`}>
            <rect
              x={x - 26} y={y - 10}
              width={52} height={20}
              rx={4}
              fill="#E51D25" fillOpacity="0.08"
              stroke="#E51D25" strokeOpacity="0.20" strokeWidth="0.6"
            />
            <text
              x={x} y={y + 4}
              textAnchor="middle"
              fontSize="8"
              fill="#E7EBF2"
              fillOpacity="0.55"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.3"
            >
              {text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
