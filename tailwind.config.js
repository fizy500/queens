/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-background':"url('./Assets/darknoise.png')",
      }
    },
  },
  plugins: [],
}