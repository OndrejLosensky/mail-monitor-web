/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    },
  extend: {
    fontFamily: {
      dancingScript: ['"Dancing Script"', ...defaultTheme.fontFamily.sans],
      roboto:['"Roboto"', ...defaultTheme.fontFamily.sans],
      cookie:['"Cookie"', ...defaultTheme.fontFamily.sans]
    }
  },
  colors: {
    buttonBg: "#419cff",
    footerBg: "#292d3e",
    headerBg: "#007aff",
    appBg: "#F8F8FF",
    TextColor: "#fefffe",
    borderBlack: "#111111",
    redLink: "#ff453a",
  }
  },
  plugins: [],
  }
  