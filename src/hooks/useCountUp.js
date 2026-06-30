import { useEffect, useState } from 'react'

/**
 * useCountUp - animates a number from 0 to `target` once `start` is true.
 */
export function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      setValue(0)
      return
    }
    let current = 0
    const step = Math.max(1, Math.ceil(target / 50))
    let raf
    const tick = () => {
      current += step
      if (current >= target) {
        setValue(target)
        return
      }
      setValue(current)
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(raf)
  }, [target, start])

  return value
}
