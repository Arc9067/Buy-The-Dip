/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        Papernotes: ["Papernotes", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#F6EF00",
        secondary: "#CB1B1B",
        green: "#27A55C",
        pink: "#FF89B9",
        blue: "337691",
      },
    },
  },
  plugins: [],
};
