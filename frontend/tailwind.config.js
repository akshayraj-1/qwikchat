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
        colorPrimary: "#9c98fa",
        colorPrimaryDark: "#5952c6",
        colorPrimaryLight: "#bab8ff",
        colorBackground: "#010409",
        colorSurface: "#0D1117",
        colorSurfaceLight: "#30363D",
        colorSurfaceVariant: "#161B22",
        colorError: "#ff708c",
        colorSuccess: "#79ff92",
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

