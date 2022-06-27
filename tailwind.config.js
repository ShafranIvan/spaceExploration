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
        "home-desktop": "url('./pages/Home/images/bg-home-desktop.jpg')",
        'home-mobile':  "url('./pages/Home/images/bg-home-mobile.jpg')",
        'home-tablet':  "url('./pages/Home/images/bg-home-tablet.jpg')",
        "destination-desktop": "url('./pages/Destination/images/bg-destination-desktop.jpg')",
        "destination-mobile":  "url('./pages/Destination/images/bg-destination-mobile.jpg')",
        "destination-tablet":  "url('./pages/Destination/images/bg-destination-tablet.jpg')",
        "planet-europa": "url('./pages/Destination/images/europa.webp",
        "planet-titan":  "url('./pages/Destination/images/titan.webp",
        "planet-moon":   "url('./pages/Destination/images/moon.webp",
        "planet-mars":   "url('./pages/Destination/images/mars.webp"
      },
      letterSpacing: {
        "nav": "0.16875em",
        "h5": "0.188em",
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
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        "barlow": ["Barlow", "sans-serif"],
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
