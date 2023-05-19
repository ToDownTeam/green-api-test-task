const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
// @ts-ignore
module.exports = {
    content: ["./src/**/*.{html,tsx}"],
    theme: {
    extend: {},
    fontFamily:{
      icons:"MoreSpeedFontFamily"
    }
  },
  plugins: [
      plugin(({ addBase, theme, addVariant }) => {
          // addBase(baseOverrides(theme));
      }),
  ],
}

