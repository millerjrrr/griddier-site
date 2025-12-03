/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ALLIN: "#a56641ff", // Red
        RAISE: "#ea9b6d", // Orange
        CALL: "#b6d7a8", // Green
        PRIOR: "#a6a6a6", // Gray
        FOLD: "#b9e7f0", // Blue
        PRIMARY: "#34004d",
        SECONDARY: "#640092",
        TERTIARY: "#ae00ff",
        CONTRAST: "#efccff",
        CONTRASTB: "#EEDFA4",
        RED: "#ffb9a8ff",
        GREEN: "#76cf70",
        TURQ: "#65B9A9",
        BLUE: "#54a2e2ff",
        GOLD: "#f5e6a4",
        DARKRED: "#f87979ff",
        WHITE: "#ffffff",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        flyInRight: {
          "0%": { opacity: 0, transform: "translateX(60px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        pulseScale: "pulseScale 2s ease-in-out infinite",
        flyInRight: "flyInRight 0.6s ease-out forwards",
      },
      boxShadow: {
        white: "0 0 5px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
