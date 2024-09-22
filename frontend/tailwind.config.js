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
        primary: "#010409",
        secondary: "#0D1117",
        secondaryLight: "#30363D",
        secondaryVariant: "#161B22",
        accent: "#9c98fa",
        accentDark: "#5952c6",
        error: "#ff708c",
        success: "#79ff92",
        textPrimary: "#e6edf3",
        textPrimaryLight: "#dadada",
        textSecondary: "#858e99",
      },
      backgroundImage: {
        layerBlur1: `url(${ImageData.backdropBg})`,
      },
      fontFamily: {
        mona: "Mona-Sans, sans-serif",
        poppins: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

