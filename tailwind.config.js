const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        serif: ["Texturina", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          accent: "#6419E6",
          primary: "#23B0A5",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          accent: "#6419E6",
          primary: "#23B0A5",
        },
      },
    ],
    darkTheme: "dark",
  },
};
