/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: 'var(--glow)',
      },
      borderRadius: {
        card: '14px',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        scrolldown: {
          '0%': { top: '-14px' },
          '60%': { top: '36px' },
          '100%': { top: '36px' },
        },
      },
      animation: {
        pulse2: 'pulse2 1.1s ease-in-out infinite',
        float: 'float 8s ease-in-out infinite',
        blink: 'blink 0.9s step-end infinite',
        scrolldown: 'scrolldown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
