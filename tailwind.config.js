/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // adjust to your paths
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        fadeInChar: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) forwards',
        blink: 'blink 1s infinite',
        fadeInChar: 'fadeInChar 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};


