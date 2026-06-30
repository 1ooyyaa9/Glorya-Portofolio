import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle } from "../components/Heading.jsx";

const INFO_CARDS = [
  {
    label: "Education",
    value: "Informatics Student",
    sub: "Focus: Cybersecurity & Web Development",
  },
  {
    label: "Currently",
    value: "Building projects + keeping up with campus life",
    sub: "Second-year at President University",
  },
  {
    label: "Interests",
    value: "Web Development, UI/UX, Cybersecurity",
    sub: "Clean systems, clean interfaces",
  },
];

export default function About() {
  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>About Me</Eyebrow>
        <SectionTitle>
          A developer who likes to know what's happening under the hood.
        </SectionTitle>
      </Reveal>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-start mt-14">
        <Reveal className="text-muted text-base leading-[1.85]">
          <p className="mb-5">
            I'm{" "}
            <strong className="text-text font-semibold">Glorya Estetica</strong>
            , a second-year Informatics student at{" "}
            <strong className="text-text font-semibold">
              President University
            </strong>
            , focused on building web applications and understanding the systems
            that power them.
          </p>
          <p className="mb-5">
            My main focus right now is{" "}
            <strong className="text-text font-semibold">cybersecurity</strong> —
            learning how to identify vulnerabilities, prevent threats, and think
            like both a builder and a defender. I enjoy knowing not just how
            things work, but how they can break.
          </p>
          <p>
            Outside of code, I'm organizing for{" "}
            <strong className="text-text font-semibold">
              PUFA Computer Science
            </strong>
            .
          </p>
        </Reveal>

        <Reveal stagger className="flex flex-col gap-4">
          {INFO_CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-surface border border-border rounded-card px-5.5 py-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow"
            >
              <div className="font-mono text-[11px] text-accent uppercase tracking-[0.12em] mb-2">
                {card.label}
              </div>
              <div className="text-[15px] font-medium">{card.value}</div>
              <div className="text-muted text-[13px] mt-1">{card.sub}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </PageWrapper>
  );
}
