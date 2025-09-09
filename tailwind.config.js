/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        'drover': '#fbf3ac',
        'william': '#345c63',
        'anzac': '#dc9c3c',
        'stiletto': '#9c2c2b',
        'spanish-green': '#869780',
        'swamp-green': '#b6be96',
        'limed-oak': '#a48150',
        'finch': '#5d664a',
        'chestnut-rose': '#c9654d',
        'granny-smith': '#87a4a4',
        
        // Legacy brand colors (keeping for compatibility)
        'brand-red': '#9c2c2b', // stiletto
        'brand-black': '#345c63', // william
        'brand-gold': '#dc9c3c', // anzac
        
        // Dark theme colors
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#b3b3b3',
        'dark-border': '#404040',
        'dark-accent': '#87a4a4', // granny-smith
        'dark-accent-hover': '#869780', // spanish-green
      },
      fontFamily: {
        'brand': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
