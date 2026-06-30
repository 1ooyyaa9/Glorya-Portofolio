import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle } from "../components/Heading.jsx";

const SOCIALS = [
  {
    href: "https://mail.google.com/mail/?view=cm&to=glorya.munte@student.president.ac.id",
    label: "Email",
    sub: "glorya.munte@student.president.ac.id",
    desc: "Send me an email anytime.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    href: "https://github.com/1ooyyaa9",
    label: "GitHub",
    sub: "github.com/1ooyyaa9",
    desc: "Check out my repositories and projects.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/glorya-estetica-0a9664314",
    label: "LinkedIn",
    sub: "linkedin.com/in/glorya-estetica-0a9664314",
    desc: "Let's connect professionally.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/_.glory19._",
    label: "Instagram",
    sub: "_.glory19._",
    desc: "Follow me on Instagram.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center min-h-[calc(100vh-200px)]">
        <Reveal className="mb-12">
          <Eyebrow>Contact</Eyebrow>
          <SectionTitle>Let's connect.</SectionTitle>
          <p className="text-muted text-[15px] mt-3">
            Feel free to reach out through any of these channels.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 p-6 bg-surface border border-border rounded-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-glow"
            >
              <div className="w-11 h-11 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent transition-all group-hover:bg-accent group-hover:text-[#06141A] group-hover:border-accent">
                {social.icon}
              </div>
              <div className="flex-1">
                <div className="font-display font-semibold text-base mb-1">
                  {social.label}
                </div>
                <div className="text-muted text-sm mb-3 leading-relaxed">
                  {social.desc}
                </div>
                <div className="font-mono text-xs text-accent truncate">
                  {social.sub}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-muted text-xs font-medium transition-all group-hover:text-accent group-hover:gap-2.5">
                <span>Open</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </PageWrapper>
  );
}
