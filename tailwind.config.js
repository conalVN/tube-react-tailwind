/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      flex: {
        side: "0 1 240px",
        input: "1 1 50%",
        labelInput: "0 1 60%",
        card: "0 1 30%",
        play: "0 1 70%",
      },
    },
  },
  plugins: [],
};
