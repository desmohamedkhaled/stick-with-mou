/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-black': '#000000',
        'brand-gold': '#FFD700',
      },
      fontFamily: {
        'brand': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
