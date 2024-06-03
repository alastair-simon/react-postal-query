/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      geoWhite: "#FAFAF7",
      geoGrey: "#F2E8E8",
      geoLightGrey: "#E5D1D1",
      geoAltGrey: "#E5E8EB",
      geoBlack: "#151515",
      geoAltBlack: "#1C0F0D",
      geoRed: "#E54533",
      geoPink: "#96574F",
      geoPalePink: "#9C8A88",
      locaDark: "#1E1E1E",
      locaMid: "#262626",
      locaMidLight: "#484848",
      locaMidAlt:"#404040",
      locaLight: "#303030",
      locaMed:"#B3B3B3",
      locaWhite: "#FAFAFA",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    extend: {},
  },
  plugins: [],
};

