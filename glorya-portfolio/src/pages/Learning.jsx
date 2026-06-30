import PageWrapper from '../components/PageWrapper.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { AnimatedBar } from '../components/AnimatedBar.jsx'
import { Eyebrow, SectionTitle } from '../components/Heading.jsx'

const LEARNING = [
  {
    name: 'React Ecosystem',
    desc: 'Deepening into context, performance patterns, and component architecture.',
    level: 75,
  },
  {
    name: 'Cybersecurity Fundamentals',
    desc: 'Working through core concepts in threat modeling and secure system design.',
    level: 55,
  },
  {
    name: 'Network Systems (CCNA)',
    desc: 'Routing protocols, VLANs, and structured Packet Tracer labs.',
    level: 60,
  },
  {
    name: 'UI/UX & Motion Design',
    desc: 'Studying how interface animation can guide attention rather than distract.',
    level: 65,
  },
]

export default function Learning() {
  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Currently Learning</Eyebrow>
        <SectionTitle>What I'm working on right now.</SectionTitle>
      </Reveal>

      <Reveal stagger className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mt-14">
        {LEARNING.map((item) => (
          <div
            key={item.name}
            className="bg-surface border border-border rounded-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
          >
            <div className="font-semibold text-base mb-2.5">{item.name}</div>
            <div className="text-muted text-[13px] leading-relaxed mb-4">{item.desc}</div>
            <AnimatedBar percent={item.level} color="var(--accent)" />
            <div className="font-mono text-[11px] text-muted mt-2">{item.level}% comfortable</div>
          </div>
        ))}
      </Reveal>
    </PageWrapper>
  )
}
