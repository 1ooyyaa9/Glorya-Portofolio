import PageWrapper from '../components/PageWrapper.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Eyebrow, SectionTitle, SectionSub } from '../components/Heading.jsx'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    tag: 'FE',
    items: [
      { name: 'React', desc: 'Component-driven UIs, hooks-based state, and animation-heavy layouts.' },
      { name: 'JavaScript / TypeScript', desc: 'Core logic, typing for safer refactors on larger projects.' },
      { name: 'Tailwind CSS', desc: 'Fast, consistent styling without leaving the markup.' },
      { name: 'HTML & CSS', desc: 'Semantic structure first, then layered animation and detail.' },
    ],
  },
  {
    title: 'Backend',
    tag: 'BE',
    items: [
      { name: 'Node.js', desc: 'REST APIs and server logic for full-stack apps.' },
      { name: 'Express', desc: 'Lightweight routing and middleware for backend services.' },
      { name: 'MongoDB', desc: 'Schema design for flexible, document-based data.' },
      { name: 'REST APIs', desc: 'Designing endpoints that are predictable and easy to consume.' },
    ],
  },
  {
    title: 'Networking & Security',
    tag: 'NET',
    items: [
      { name: 'Cisco Networking', desc: 'Routing, switching, and subnetting through CCNA-aligned labs.' },
      { name: 'TCP/IP Fundamentals', desc: 'How data actually moves — and where it can be intercepted.' },
      { name: 'Network Security Basics', desc: 'Firewalls, access control, and common attack surfaces.' },
      { name: 'Linux Fundamentals', desc: 'Command-line comfort for servers and security tooling.' },
    ],
  },
  {
    title: 'Tools & Software',
    tag: 'TL',
    items: [
      { name: 'Git & GitHub', desc: 'Version control, branching workflows, build-in-public commits.' },
      { name: 'VS Code', desc: 'Daily driver, tuned with extensions for speed.' },
      { name: 'Figma', desc: 'Wireframes and UI exploration before writing code.' },
      { name: 'Packet Tracer', desc: 'Simulating and testing network topologies.' },
    ],
  },
]

export default function Skills() {
  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Tech Stack</Eyebrow>
        <SectionTitle>Tools I reach for, on both sides of the stack.</SectionTitle>
        <SectionSub>Hover any card for a quick note on how I use it.</SectionSub>
      </Reveal>

      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="mb-12">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-4.5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {group.title}
              <span className="flex-1 h-px bg-border" />
            </div>
          </Reveal>
          <Reveal stagger className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4.5">
            {group.items.map((skill) => (
              <div
                key={skill.name}
                tabIndex={0}
                className="group relative overflow-hidden bg-surface border border-border rounded-card p-5 transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-glow"
              >
                <div className="absolute inset-0 rounded-card bg-gradient-to-br from-[rgba(77,216,232,0.12)] to-[rgba(124,107,255,0.10)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative font-mono text-[11px] text-accent border border-border rounded-md px-2 py-1 inline-block mb-2.5">
                  {group.tag}
                </div>
                <div className="relative font-semibold text-[15px] mb-1.5">{skill.name}</div>
                <div className="relative text-muted text-[13px] leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-1.5 transition-all overflow-hidden">
                  {skill.desc}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      ))}
    </PageWrapper>
  )
}
