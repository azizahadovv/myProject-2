/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BeauSans:
          "PF BeauSans Pro ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      },

      colors: {
        white: "#fff",
        bleck: "#121212",
        grayF: "#A7A7A7",
        greenF: "#4FBC5B",
        red: "#E63739",
        lightBlack: "#302F2F",
      },
      
      screens: {
        sn: "320px",
        ss: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    screens: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
