/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3EE9E5",
        secondary: "#093F68",
        grey: "#777F98",
        white: "#FFFFFF",
        error: "#FF2965",
        background: "#080C20",
      },
    },
  },
  plugins: [require("daisyui")],
};
