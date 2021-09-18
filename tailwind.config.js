module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      nav: {
        light: "#003252",
        DEFAULT: "#202D68",
        dark: "#009eeb",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      whiteLight: "#eeeeee",
      modal: "#808080",
      dark: "#090909",
      orange: "#FDA521",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
