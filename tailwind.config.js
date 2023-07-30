/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      colors: {
        "red-active": "#941f3a",
        "grey-background": "#e6e6e6",
        "grey-border": "#737373",
        "grey-input": "#d4cfc9",
        "grey-text": "#545454",
        "yellow-bubble": "#ffbd59",
        "grey-bubble": "#c1bfbf",
      },
    },
  },
  plugins: [],
};
