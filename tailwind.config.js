/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        0.25: "0.0625rem",
      },
      backgroundImage: {
        "home-desktop": "url('./images/planet.jpg')",
        'home-mobile': "url('./images/bg-home-mobile.jpg')",
        'home-tablet': "url('./images/bg-home-tablet.jpg')",
      },
      letterSpacing: {
        "nav": "0.16875em"
      },
      fontSize: {
        "h1": "9.375rem",
        "h2": "6.25rem",
        "h3": "3.5rem",
        "h4": "2rem",
        "h5": "1.75rem",
        "sh1": "1.75rem",
        "sh2": "0.875rem",
        "bt": "1.125rem",
      },
      fontFamily: {
        sans: ["Bellefair", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"]
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
