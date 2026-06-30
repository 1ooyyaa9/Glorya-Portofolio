import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle, SectionSub } from "../components/Heading.jsx";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    tag: "FE",
    items: [
      { name: "HTML", desc: "Semantic markup and page structure." },
      { name: "CSS", desc: "Styling, layouts, and responsive design." },
      {
        name: "JavaScript",
        desc: "Core logic and interactivity for web apps.",
      },
      {
        name: "React",
        desc: "Component-driven UIs and hooks-based state management.",
      },
    ],
  },
  {
    title: "Backend",
    tag: "BE",
    items: [
      {
        name: "PHP",
        desc: "Server-side scripting for dynamic web applications.",
      },
      {
        name: "Laravel",
        desc: "MVC framework for building robust PHP applications.",
      },
      { name: "Python", desc: "Scripting, automation, and backend logic." },
      {
        name: "Java",
        desc: "Object-oriented programming and application development.",
      },
      { name: "MySQL", desc: "Relational database design and querying." },
    ],
  },
  {
    title: "Networking & Security",
    tag: "NET",
    items: [
      {
        name: "Cisco Packet Tracer",
        desc: "Simulating and testing network topologies.",
      },
      { name: "", desc: "", empty: true },
      { name: "", desc: "", empty: true },
      { name: "", desc: "", empty: true },
    ],
  },
  {
    title: "Tools",
    tag: "TL",
    items: [
      { name: "Git", desc: "Version control and branching workflows." },
      {
        name: "GitHub",
        desc: "Remote repositories and build-in-public commits.",
      },
      { name: "Figma", desc: "UI/UX wireframing and design exploration." },
      {
        name: "VS Code",
        desc: "Daily driver code editor, tuned with extensions.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Tech Stack</Eyebrow>
        <SectionTitle>
          Tools I reach for, on both sides of the stack.
        </SectionTitle>
        <SectionSub>
          Hover any card for a quick note on how I use it.
        </SectionSub>
      </Reveal>

      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="mb-12">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
              {group.title}
              <span className="flex-1 h-px bg-border" />
            </div>
          </Reveal>
          <Reveal
            stagger
            className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"
          >
            {group.items.map((skill, i) =>
              skill.empty ? (
                <div key={i} className="invisible" />
              ) : (
                <div
                  key={skill.name}
                  tabIndex={0}
                  className="group relative overflow-hidden bg-surface border border-border rounded-card p-5 transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-card bg-gradient-to-br from-[rgba(77,216,232,0.12)] to-[rgba(124,107,255,0.10)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative font-mono text-[11px] text-accent border border-border rounded-md px-2 py-1 inline-block mb-2.5">
                    {group.tag}
                  </div>
                  <div className="relative font-semibold text-[15px] mb-1.5">
                    {skill.name}
                  </div>
                  <div className="relative text-muted text-[13px] leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-1.5 transition-all overflow-hidden">
                    {skill.desc}
                  </div>
                </div>
              ),
            )}
          </Reveal>
        </div>
      ))}
    </PageWrapper>
  );
}
