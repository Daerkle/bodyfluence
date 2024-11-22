/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#1a1a1a',
        'primary-300': '#2a2a2a',
        'primary-500': '#3a3a3a',
        'secondary-400': '#4F46E5',
        'secondary-500': '#4338CA',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #000000, #111111)',
        'gradient-primary': 'linear-gradient(to right, #ef4444, #dc2626)',
        'gradient-secondary': 'linear-gradient(to right, #4F46E5, #4338CA)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
