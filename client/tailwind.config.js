/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      boxShadow: {
        "custom-light":
          "0px 10px 38px -10px rgba(48, 48, 48, 0.35), 0px 10px 20px -15px rgba(48, 48, 48, 0.2)",
        "custom-dark": "0 2px 10px rgba(48, 48, 48, 0.7)",
      },
      keyframes: {
        overlayShow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        contentShow: {
          "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

