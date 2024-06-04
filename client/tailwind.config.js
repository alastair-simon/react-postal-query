/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      locaDark: "#1E1E1E",
      locaMid: "#262626",
      locaMidLight: "#484848",
      locaMidAlt: "#404040",
      locaLight: "#303030",
      locaMed: "#B3B3B3",
      locaWhite: "#FAFAFA",
      locaBlue: "#1964BA",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    extend: {},
  },
  plugins: [],
};

