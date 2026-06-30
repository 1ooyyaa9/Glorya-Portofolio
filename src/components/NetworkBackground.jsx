import { useEffect, useState } from 'react'

export default function NetworkBackground() {
  const [points, setPoints] = useState([])
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    setSize({ w, h })

    const nodeCount = 7
    const pts = []
    for (let i = 0; i < nodeCount; i++) {
      pts.push({ x: Math.random() * w, y: Math.random() * h })
    }
    setPoints(pts)
  }, [])

  if (size.w === 0) return null

  return (
    <svg
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 'var(--net-opacity)' }}
      viewBox={`0 0 ${size.w} ${size.h}`}
      width={size.w}
      height={size.h}
      preserveAspectRatio="none"
    >
      {points.map((p, i) =>
        i > 0 ? (
          <line
            key={`line-${i}`}
            x1={points[i - 1].x}
            y1={points[i - 1].y}
            x2={p.x}
            y2={p.y}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ) : null
      )}
      {points.map((p, i) => (
        <circle key={`node-${i}`} cx={p.x} cy={p.y} r="3" fill="var(--accent)" opacity="0.5" />
      ))}
    </svg>
  )
}
