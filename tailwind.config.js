/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        black: "#212529",
        "light-red": "#FFEFEF",
      },
    },
  },
  plugins: [],
};
