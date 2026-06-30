import { useReveal } from '../hooks/useReveal.js'

/**
 * Reveal - wraps children in a fade/slide-up animation triggered on scroll into view.
 * `stagger` makes direct children animate one-by-one.
 */
export function Reveal({ children, stagger = false, resetKey, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal(resetKey)
  const base = stagger ? 'reveal-stagger' : 'reveal'
  return (
    <Tag ref={ref} className={`${base} ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
