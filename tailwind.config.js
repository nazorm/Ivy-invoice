/** @type {import('tailwindcss').Config} */
import themeColors from "./src/styles/themeColors";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "lightBg": "#f8f8fb",
      "darkBg": "#141625",
      "accent-color" : "#7C5DFA",
      "accent-color-hover":"#9277FF",
      "regal-blue": "#243c5a",
      "grey-blue": "#252945",
      "light-grey" : "#858BB2",
      "dark-blue" : "#0C0E16",
      "color-text-light": "#ffffff",
      "color-text-dark": "#0C0E16",
      "grey-text-dark" : "#DFE3FA",
      "grey-text-light" : "#888EB0",
      "grey-border-dark" : "#1E2139",
      "default-light-color" : "#F9FAFE",
      "accent-color-text" : "#7E88C3",
      "color-red" : "#EC5757",
      "color-red-hover" : "#FF9797",
      "color-draft" : "#373B53",
      "color-success" : '#33D69F',
      "color-warning" : '#FF8F00',   
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
