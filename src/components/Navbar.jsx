import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ page, setPage }) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 py-[18px] bg-bg/55 backdrop-blur-xl border-b border-border">
        <div
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-wide cursor-pointer select-none"
          onClick={() => go("home")}
        >
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          glorya<span className="text-muted">.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative py-1 text-sm font-medium font-body transition-colors ${
                page === item.id ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-accent transition-all ${
                  page === item.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3.5">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            className="w-[38px] h-[38px] rounded-full border border-border bg-surface flex items-center justify-center text-text transition-all hover:border-accent hover:scale-105"
          >
            {theme === "light" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden flex flex-col gap-[5px]"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-[22px] h-[2px] bg-text" />
            <span className="w-[22px] h-[2px] bg-text" />
            <span className="w-[22px] h-[2px] bg-text" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[72%] max-w-[300px] bg-surface border-l border-border z-[1100] flex flex-col gap-6 px-7 py-24 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-2xl text-text"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className={`text-left text-base font-medium font-body ${
              page === item.id ? "text-accent" : "text-text"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
