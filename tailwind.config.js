/** @type {import('tailwindcss').Config} */
export default {
  content: [], content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      '2sm': '350px',
      'sm': '640px',     // Small screens
      'md': '768px',     // Medium screens
      'lg': '1024px',    // Large screens
      'xl': '1280px',    // Extra-large screens
    },
    keyframes: {
      'scale-up-center': {
        '0%': {
          transform: 'scale(.5)',
          opacity: '0',
        },
        '100%': {
          transform: 'scale(1)',
          opacity: '1',
        },
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    },
  },
  plugins: [],
}

