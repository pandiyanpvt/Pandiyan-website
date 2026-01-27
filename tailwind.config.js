/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#facc15",
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '1920': '1920px',
      },
    },
  },
  plugins: [],
};


