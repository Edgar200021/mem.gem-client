/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      sf: ["San Francisco Pro Display", "sans-serif"],
    },
    colors: {
      blue: "#5cabf7",
      gray: {
        0: "rgba(255, 255, 255, 0.7)",
        50: "rgba(255,255,255,0.6)",
        100: "rgba(255,255,255,0.4)",
        150: "rgba(243, 243, 243, 0.2)",
        200: "rgba(243, 243, 243, 0.12)",
      },
      green: "#94c293",
      white: "#ffffff",
      black: "#000000",
      transparent: "rgba(255,255,255,0)",
      red: "#ff7171",
    },
    backgroundImage: {
      "progress-green":
        "linear-gradient(90deg, rgba(103,177,162,1) 50%, rgba(164,202,141,1) 100%)",
      "progress-red":
        "linear-gradient(90deg, rgba(255,113,113,1) 50%, rgba(198,23,23,1) 100%);",
    },
  },
  plugins: [],
};
