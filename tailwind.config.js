/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2C4A3E",
        sage: {
          DEFAULT: "#7A9E8E",
          mid: "#5C8070",
          light: "#D4E6DF",
          pale: "#EEF5F2",
        },
        cream: "#FAF7F2",
        parchment: "#F0EAE0",
        terra: {
          DEFAULT: "#C4714A",
          light: "#E8C4B0",
          pale: "#F5E8DF",
        },
        bark: "#3D2B1F",
        stone: {
          DEFAULT: "#7A6E65",
          light: "#C8C0B8",
          pale: "#F2EDE8",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Nunito'", "system-ui", "sans-serif"],
        sans: ["'Nunito'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        warm: "0 4px 24px rgba(61, 43, 31, 0.08)",
        "warm-lg": "0 8px 40px rgba(61, 43, 31, 0.12)",
      },
    },
  },
  plugins: [],
};
