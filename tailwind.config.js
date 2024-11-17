/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: '#F5EBE0',
      },
      fontFamily: {
        karla: ['Karla', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
        cormorantSC: ['Cormorant SC', 'serif'],
        cormorantGaramond: ['Cormorant Garamond Static', 'serif'],
      },
      margin: {
        big: '75px',
      },
    },
  },
  plugins: [],
};
