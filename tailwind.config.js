/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        video: "calc(100% / 3 - 8px)",
        short: "400px",
      },
      maxWidth: {
        video: "360px",
        "container-videos": "calc(3 * 360px + 16px)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        "alpha-3": "rgba(0, 0, 0, .3)",
      },
      flex: {
        side: "0 1 240px",
        input: "1 1 50%",
        labelInput: "0 1 60%",
        thumbnailSearch: "0 1 28%",
        card: "0 1 32%",
        thumbnail: "0 1 40%",
        play: "0 1 70%",
      },
      animation: {
        moveRight: "moveRight .3s ease",
        moveLeft: "moveLeft .3s ease",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-240px)" },
          "100%": { transform: "translateX(0)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-240px)" },
        },
      },
    },
  },
  plugins: [],
};
