import { useReveal } from '../hooks/useReveal.js'

/**
 * AnimatedBar - a thin progress bar that fills to `percent` when scrolled into view.
 */
export function AnimatedBar({ percent, color, resetKey }) {
  const [ref, visible] = useReveal(resetKey, 0.3)
  return (
    <div ref={ref} className={`bar-track ${visible ? 'visible' : ''}`} style={{ '--target-width': `${percent}%` }}>
      <div className="bar-fill" style={{ background: color }} />
    </div>
  )
}
