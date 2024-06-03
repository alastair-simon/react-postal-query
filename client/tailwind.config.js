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
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
    },
    extend: {},
  },
  plugins: [],
};

