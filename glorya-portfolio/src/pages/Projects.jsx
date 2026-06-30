import PageWrapper from '../components/PageWrapper.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { AnimatedBar } from '../components/AnimatedBar.jsx'
import { Eyebrow, SectionTitle } from '../components/Heading.jsx'

const PROJECTS = [
  {
    status: 'In Progress',
    title: 'Personal Portfolio v2',
    desc: "The site you're looking at right now — a from-scratch React build with custom animation and theming.",
    progress: 70,
    tech: ['React', 'Tailwind', 'Vite'],
  },
  {
    status: 'Planning',
    title: 'Network Lab Tracker',
    desc: 'A small app to log Cisco lab exercises, topologies, and configuration notes.',
    progress: 25,
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    status: 'Concept',
    title: 'Subnet Calculator',
    desc: 'An interactive tool for visualizing IP subnetting — built to make a textbook concept tangible.',
    progress: 10,
    tech: ['JavaScript', 'HTML/CSS'],
  },
]

export default function Projects() {
  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Projects</Eyebrow>
        <SectionTitle>Currently in development.</SectionTitle>
      </Reveal>

      <Reveal className="border border-dashed border-border rounded-card px-6 py-4.5 mb-10 font-mono text-[13px] text-accent2 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse2" />
        <span>Building in public — first projects launching soon. Check back for updates.</span>
      </Reveal>

      <Reveal stagger className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden bg-surface border border-border rounded-card p-6 transition-all hover:-translate-y-1.5 hover:border-accent2 hover:shadow-[0_0_40px_rgba(124,107,255,0.18)]"
          >
            <div className="font-mono text-[11px] text-accent2 uppercase tracking-[0.1em] mb-2.5">
              {project.status}
            </div>
            <div className="font-semibold text-[17px] mb-2">{project.title}</div>
            <div className="text-muted text-[13px] leading-relaxed mb-4.5">{project.desc}</div>

            <AnimatedBar percent={project.progress} color="linear-gradient(90deg, var(--accent), var(--accent2))" />
            <div className="font-mono text-[11px] text-muted flex justify-between mt-2">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>

            <div className="flex gap-1.5 flex-wrap mt-3.5 max-h-0 opacity-0 overflow-hidden group-hover:max-h-16 group-hover:opacity-100 transition-all">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-2 text-muted border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </PageWrapper>
  )
}
