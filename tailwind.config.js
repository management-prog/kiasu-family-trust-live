/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          800: '#2a3b5e',
          900: '#1a2744',
          950: '#0a101d',
        },
        gold: {
          300: '#f0e68c',
          400: '#d4af37',
          500: '#b8860b',
          600: '#8a6508',
        },
        cream: {
          50: '#f5f5f0',
          100: '#e6e6e0',
        }
      },
      animation: {
        'slow-zoom': 'zoom 20s infinite alternate',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
