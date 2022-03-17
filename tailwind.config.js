const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        sun: {
          DEFAULT: "#FFCD00",
          50: "#FFF1B8",
          100: "#FFEDA3",
          200: "#FFE57A",
          300: "#FFDD52",
          400: "#FFD529",
          500: "#FFCD00",
          600: "#C7A000",
          700: "#8F7300",
          800: "#574600",
          900: "#1F1900",
        },
        fire: {
          DEFAULT: "#E29034",
          50: "#F9E8D5",
          100: "#F6DEC3",
          200: "#F1CB9F",
          300: "#ECB77B",
          400: "#E7A458",
          500: "#E29034",
          600: "#C2741C",
          700: "#915615",
          800: "#60390E",
          900: "#2F1C07",
        },
      },
    },
  },
  plugins: [],
};
