/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: '#FAF8F5',
        surface: '#FFFFFF',
        borderMuted: '#E5DEC9',
        textMain: '#1C1917',
        textMuted: '#57534E',
        headingGreen: '#064E3B',
        btnGreen: '#064E3B',
        btnGreenHover: '#043628',
        btnText: '#EFE2BC',
        goldAccent: '#C5A059',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
