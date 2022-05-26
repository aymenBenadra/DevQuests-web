module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          accent: "#6419E6",
          primary: "#1FB2A6",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          accent: "#6419E6",
          primary: "#1FB2A6",
        },
      },
    ],
    darkTheme: "dark",
  },
};
