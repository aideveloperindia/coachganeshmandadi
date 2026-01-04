import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B0082", // ROYAL INDIGO
        accent: "#C1275A", // MAGENTA
        secondary: "#F5A623", // GOLDEN AMBER
        "royal-indigo": "#4B0082",
        "magenta": "#C1275A",
        "golden-amber": "#F5A623",
        "ivory-white": "#F3F6F1",
        "warm-charcoal": "#2D2D2D",
        "soft-blush": "#F7D9E3",
        "bright-marigold": "#FFB533",
        success: "#10B981", // Fresh emerald
        warning: "#F59E0B", // Warm amber
        text: "#2D2D2D", // WARM CHARCOAL
        muted: "#64748B", // Professional slate gray
        light: "#F3F6F1", // IVORY WHITE
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

