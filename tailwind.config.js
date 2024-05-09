/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#f2ebd9',
      'dark': '#5f5452',
      'blu': '#b2ceda',
      'white': '#fff',
      'black': '#000000',
    },
    extend: {
      fontFamily: {
        primary: 'Cherl, ui-serif', // Adds a new `font-display` class
        secondary: 'Cheri, ui-serif', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

