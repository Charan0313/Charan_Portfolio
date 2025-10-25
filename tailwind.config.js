/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heistRed: "#D90429",
        heistBlack: "#0A0A0A",
        heistGold: "#FFD700",
        heistGray: "#E5E5E5",
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
