/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-black': '#000000',
        'brand-gold': '#FFD700',
        // Dark theme colors
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#b3b3b3',
        'dark-border': '#404040',
        'dark-accent': '#3b82f6',
        'dark-accent-hover': '#2563eb',
      },
      fontFamily: {
        'brand': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
