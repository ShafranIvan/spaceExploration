/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bellefair", "sans-serif"]
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#D0D6F9",
        neutral: "#0B0D17"
      }
    },
  },
  plugins: [],
}
