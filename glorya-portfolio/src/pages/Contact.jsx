import { useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { Eyebrow, SectionTitle, SectionSub } from "../components/Heading.jsx";

const SOCIALS = [
  {
    href: "https://mail.google.com/mail/?view=cm&to=glorya.munte@student.president.ac.id",
    label: "Email",
    sub: "glorya.munte@student.president.ac.id",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/gloryaestetica19",
    label: "LinkedIn",
    sub: "linkedin.com/in/gloryaestetica19",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent. Thanks for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <SectionTitle>Let's connect.</SectionTitle>
        <SectionSub>
          Whether it's a project, a question, or just to talk networks and code
          — reach out.
        </SectionSub>
      </Reveal>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <Reveal>
          <div className="flex flex-col gap-3.5 mt-7">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-3.5 px-5 py-4 bg-surface border border-border rounded-card text-text text-sm font-medium transition-all hover:translate-x-1.5 hover:border-accent hover:shadow-glow"
              >
                <span className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center flex-shrink-0">
                  {social.icon}
                </span>
                <div>
                  <div>{social.label}</div>
                  {social.sub && (
                    <div className="font-mono text-muted text-xs">
                      {social.sub}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-xs font-mono uppercase tracking-[0.1em] text-muted mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3.5 text-text text-sm transition-colors focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs font-mono uppercase tracking-[0.1em] text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3.5 text-text text-sm transition-colors focus:outline-none focus:border-accent"
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs font-mono uppercase tracking-[0.1em] text-muted mb-2">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3.5 text-text text-sm transition-colors focus:outline-none focus:border-accent min-h-[120px] resize-y"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3.5 rounded-lg font-semibold text-sm bg-accent text-[#06141A] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(77,216,232,0.3)]"
            >
              Send Message
            </button>
            <div className="font-mono text-xs text-accent mt-3.5 h-[18px]">
              {status}
            </div>
          </form>
        </Reveal>
      </div>
    </PageWrapper>
  );
}
