import { useEffect, useState } from "react";

const FULL_TEXT = "Hi, I'm Glorya Estetica";

export default function Home({ setPage }) {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    let timeout;

    const tick = () => {
      charIndex++;
      setText(FULL_TEXT.slice(0, charIndex));
      if (charIndex < FULL_TEXT.length) {
        timeout = setTimeout(tick, 90);
      } else {
        setIsDone(true);
      }
    };

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pt-[90px]">
      <div className="relative">
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-0 min-h-[calc(100vh-90px)] max-w-[1400px] mx-auto">
          <div className="flex-[1.1] flex flex-col justify-center px-8 md:pl-16 lg:pl-20 relative z-10">
            <div className="font-mono text-[13px] text-accent uppercase tracking-[0.15em] mb-4">
              Full-Stack Developer / Network &amp; Security Enthusiast
            </div>
            <h1 className="font-display font-bold text-[40px] md:text-[72px] leading-[1.05] tracking-tight mb-5">
              <span className={isDone ? "" : "typing-line"}>
                {text.length <= 7 ? (
                  text
                ) : (
                  <>
                    {text.slice(0, 7)}
                    <span className="text-accent">{text.slice(7)}</span>
                  </>
                )}
              </span>
            </h1>
            <p className="text-muted text-lg max-w-[480px] leading-relaxed mb-9">
              I design and build full-stack web applications, while exploring
              the systems underneath networks, protocols, and the security that
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
                href="https://www.linkedin.com/in/glorya-estetica-0a9664314"
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
                href="mailto:glorya.munte@student.president.ac.id"
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

          {/* Photo — fills right side, full height, anchored to edge */}
          <div className="relative flex-[0.9] hidden md:flex items-end justify-center">
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 70% 50%, rgba(77,216,232,0.12) 0%, rgba(124,107,255,0.06) 40%, transparent 70%)",
                zIndex: 0,
              }}
            />
            <img
              src="/porto.png"
              alt="Glorya"
              style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                maxHeight: "calc(100vh - 120px)",
                width: "auto",
                objectFit: "contain",
                objectPosition: "bottom",
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>

          {/* Mobile photo (smaller, centered) */}
          <div className="flex md:hidden justify-center items-end px-8">
            <img
              src="/porto.png"
              alt="Glorya"
              style={{
                width: "70%",
                maxWidth: 280,
                height: "auto",
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
