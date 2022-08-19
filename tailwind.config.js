/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': 'rgba(255,255,255,0.2)',
        'dark': 'rgba(0,0,0,0.9)',
        'dark-minor': 'rgba(0,0,0,0.7)'
      },
      keyframes: {
        RightToMid: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        RightToMid: 'RightToMid ease-in-out 0.25s'
      }
    },
  },
  plugins: [],
}
