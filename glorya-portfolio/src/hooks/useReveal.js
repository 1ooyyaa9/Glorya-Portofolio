import { useEffect, useRef, useState } from 'react'

/**
 * useReveal - returns a ref and a boolean `visible` that becomes true
 * once the element enters the viewport. `resetKey` can be changed to
 * force the animation to replay (e.g. when switching pages).
 */
export function useReveal(resetKey, threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [resetKey, threshold])

  return [ref, visible]
}
