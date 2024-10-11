/** @type {import('tailwindcss').Config} */

import ImageData from "./src/values/images-data.json";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9c98fa",
        primaryDark: "#5952c6",
        primaryLight: "#bab8ff",
        background: "#010409",
        surface: "#0D1117",
        surfaceLight: "#30363D",
        surfaceVariant: "#161B22",
        error: "#ff708c",
        success: "#79ff92",
        textPrimary: "#e6edf3",
        textPrimaryLight: "#dadada",
        textSecondary: "#838c96",
      },
      backgroundImage: {
        layerBlur1: `url(${ImageData.backdropBg})`,
      },
      fontFamily: {
        mona: "Mona-Sans, sans-serif",
        poppins: "Poppins, sans-serif"
      },
      maxWidth: {
        custom: "min(67vw, 570px)",
        custom2: "min(60vw, 610px)"
      },
      screens: {
        sm: "481px"
      }
    },
  },
  plugins: [],
}

