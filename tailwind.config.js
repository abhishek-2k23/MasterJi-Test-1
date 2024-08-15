/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        donegal: ['Donegal One', 'serif'],
        dmserif: ['DM Serif', 'serif'],
        dmsans: ['DM Sans', 'serif']
      }
    },
  },
  plugins: [],
}