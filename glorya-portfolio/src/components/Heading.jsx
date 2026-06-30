export function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5 mb-3.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
      <span className="inline-block w-6 h-px bg-accent" />
      {children}
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display font-semibold text-[28px] md:text-[42px] mb-3.5 tracking-tight leading-tight">
      {children}
    </h2>
  )
}

export function SectionSub({ children }) {
  return <p className="text-muted text-[15px] max-w-[560px] mb-14 leading-relaxed">{children}</p>
}
