/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 1s ease infinite',
        rotateOpacity1: 'rotateOpacity 1s ease infinite 0.1s',
        rotateOpacity2: 'rotateOpacity 1s ease infinite 0.2s',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(1turn)',
          },
        },

        rotateOpacity: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'rotate(1turn)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
