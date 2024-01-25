// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  important: true, // important in prod is must be
  theme: ["dark"],
  plugins: [require('@tailwindcss/typography'),require('daisyui')],
  daisyui: {
    themes: ['winter', 'dracula'],
  },
}
