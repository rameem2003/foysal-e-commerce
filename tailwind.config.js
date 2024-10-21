/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1600px",
      },

      backgroundImage: {
        bgScreen: "url(/bg1.jpg)",
        lenear:
          "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.8) 85%)",
      },

      colors: {
        primary: "#8224E3",
        pageOffWhite: "#F6F6F6",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      boxShadow: {
        custom: "4px 36px 36px -7px rgba(0,0,0,0.77)",
      },
    },
  },
  plugins: [],
};
