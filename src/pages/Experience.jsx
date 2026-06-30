import { useReveal } from "../hooks/useReveal.js";
import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle } from "../components/Heading.jsx";

const TIMELINE = [
  {
    role: "Treasure I",
    org: "PUFA Computer Science · Full-time",
    period: "Nov 2025 - Present · West Java, Indonesia",
    desc: "Managed and monitored the association's budget alongside Treasurer II, developed financial plans for 50+ members, and directed financial operations for PUFA Computer Science events from budget planning and fund allocation to expense tracking.",
  },
  {
    role: "Vice of Division Entrepreneurship",
    org: "PUFA Computer Science · Seasonal",
    period: "Nov 2024 - Oct 2025 · West Java, Indonesia",
    desc: "Handled the Computer Science Store operations and led sponsorship outreach efforts to support division activities and events.",
  },
  {
    role: "Treasure II",
    org: "COMPSPHERE · Full-time",
    period: "Feb 2025 - Dec 2025 · West Java, Indonesia",
    desc: "Planning Budgeting & Forecasting",
  },
];

export default function Experience() {
  const [lineRef, lineVisible] = useReveal(null, 0.1);

  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Experience &amp; Organization</Eyebrow>
        <SectionTitle>Where I've put things into practice.</SectionTitle>
      </Reveal>

      <Reveal className="relative pl-9">
        <div
          ref={lineRef}
          className={`timeline-line ${lineVisible ? "visible" : ""}`}
        />
        {TIMELINE.map((item, i) => (
          <div
            key={item.role}
            className={`relative ${i === TIMELINE.length - 1 ? "" : "pb-11"}`}
          >
            <div className="absolute -left-[34px] top-1 w-[13px] h-[13px] rounded-full bg-bg border-2 border-accent shadow-[0_0_0_4px_var(--bg)]" />
            <div className="font-semibold text-base mb-1">{item.role}</div>
            <div className="font-mono text-xs text-accent mb-1">{item.org}</div>
            <div className="font-mono text-xs text-muted mb-2">
              {item.period}
            </div>
            <div className="text-muted text-sm leading-[1.7] max-w-[560px]">
              {item.desc}
            </div>
          </div>
        ))}
      </Reveal>
    </PageWrapper>
  );
}
