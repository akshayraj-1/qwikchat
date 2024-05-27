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
        accent: "#9273d2",
        accentDark: "#7557b2",
        error: "#ff708c",
        success: "#79ff92",
        textPrimary: "#fff",
        textPrimaryLight: "#dadada",
        textSecondary: "#838C96",
      },
      backgroundImage: {
        glow: `url(${ImageData.mainBg})`,
        layerBlur1: `url(${ImageData.backdropBg})`
      },
      fontFamily: {
        firacode: "Fira Code, monospace",
        poppins: "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

