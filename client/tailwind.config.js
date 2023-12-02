/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  plugins: [],
};
