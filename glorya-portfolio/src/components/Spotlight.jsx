import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!ref.current) return
      ref.current.style.setProperty('--x', `${e.clientX}px`)
      ref.current.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={ref} className="spotlight" />
}
