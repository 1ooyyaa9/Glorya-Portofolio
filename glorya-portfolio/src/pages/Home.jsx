import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper.jsx";

const PHRASES = [
  "building & securing the web.",
  "crafting clean interfaces.",
  "exploring networks & systems.",
];

export default function Home({ setPage }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const phrase = PHRASES[phraseIndex];
      if (!deleting) {
        charIndex++;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        charIndex--;
        setText(phrase.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 35 : 55);
    };

    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 min-h-[calc(100vh-120px)]">
        <div className="flex-[1.1]">
          <div className="font-mono text-[13px] text-accent uppercase tracking-[0.15em] mb-4">
            Full-Stack Developer / Network &amp; Security Enthusiast
          </div>
          <h1 className="font-display font-bold text-[40px] md:text-[72px] leading-[1.05] tracking-tight mb-5">
            Hi, I'm <span className="text-accent">Glorya Estetica</span>
            <br />
            <span className="typing-line">{text}</span>
          </h1>
          <p className="text-muted text-lg max-w-[480px] leading-relaxed mb-9">
            I design and build full-stack web applications, while exploring the
            systems underneath — networks, protocols, and the security that
            holds it all together.
          </p>
          <div className="flex gap-4 flex-wrap mb-9">
            <button
              onClick={() => setPage("skills")}
              className="px-7 py-3.5 rounded-lg font-semibold text-sm bg-accent text-[#06141A] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(77,216,232,0.3)]"
            >
              View Skills
            </button>
            <button
              onClick={() => setPage("contact")}
              className="px-7 py-3.5 rounded-lg font-semibold text-sm border border-border text-text transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/1ooyyaa9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[42px] h-[42px] rounded-full border border-border bg-surface flex items-center justify-center text-text transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gloryaestetica19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[42px] h-[42px] rounded-full border border-border bg-surface flex items-center justify-center text-text transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=glorya.munte@student.president.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-[42px] h-[42px] rounded-full border border-border bg-surface flex items-center justify-center text-text transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-[0.9] flex justify-center">
          <div className="relative w-[220px] h-[250px] md:w-[300px] md:h-[340px] rounded-3xl bg-surface border border-border overflow-hidden shadow-glow">
            <img
              src="/porto.jpg"
              alt="Glorya"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(77,216,232,0.10)] to-[rgba(124,107,255,0.10)]" />
            <span className="absolute top-3.5 left-3.5 w-[22px] h-[22px] border-t-2 border-l-2 border-accent" />
            <span className="absolute bottom-3.5 right-3.5 w-[22px] h-[22px] border-b-2 border-r-2 border-accent" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
