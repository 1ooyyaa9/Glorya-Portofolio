import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 900)
    return () => clearTimeout(t1)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-all duration-500 ${
        hidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="flex items-center gap-2.5 font-mono text-sm uppercase tracking-[0.35em] text-accent">
        <span>GLORYA</span>
        <span className="loader-dot animate-pulse2" />
        <span className="loader-dot animate-pulse2" style={{ animationDelay: '0.2s' }} />
        <span className="loader-dot animate-pulse2" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
}
