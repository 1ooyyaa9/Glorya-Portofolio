import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle } from "../components/Heading.jsx";

const INFO_CARDS = [
  {
    label: "Education",
    value: "Information Technology Student",
    sub: "Focus: Software Development & Computer Networks",
  },
  {
    label: "Currently",
    value: "Building full-stack projects + Cisco networking labs",
    sub: "Documenting progress build-in-public",
  },
  {
    label: "Interests",
    value: "Web Development, Network Security, UI/UX",
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
            , a student and developer focused on building clean, functional web
            applications with{" "}
            <strong className="text-text font-semibold">React</strong> and
            modern frontend tooling, paired with backend logic that actually
            holds up.
          </p>
          <p className="mb-5">
            Alongside development, I spend a lot of time in{" "}
            <strong className="text-text font-semibold">
              networking and cybersecurity,
            </strong>{" "}
            studying how systems communicate, where they break, and how to keep
            them safe. That dual lens shapes how I build: not just "does it
            work," but "is it solid."
          </p>
          <p>
            Outside of code, I'm usually deep in a{" "}
            <strong className="text-text font-semibold">Cisco lab</strong>,
            organizing for{" "}
            <strong className="text-text font-semibold">
              PUFA Computer Science
            </strong>
            , or quietly shipping small projects in public.
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
