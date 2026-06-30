export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border px-8 py-9 max-w-[1080px] mx-auto flex items-center justify-between flex-wrap gap-4 text-muted text-[13px]">
      <div>&copy; 2026 Glorya. Built with React, Vite &amp; Tailwind.</div>
      <div className="flex gap-4">
        <a
          href="https://github.com/1ooyyaa9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gloryaestetica19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=glorya.munte@student.president.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
