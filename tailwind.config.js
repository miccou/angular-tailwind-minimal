/** @type {import('tailwindcss').Config} */

import { theme } from "./theme";

module.exports = {
  content: ["./**/*.{html,ts}"],
  theme: {
      colors: {
        white: "#FFFFFF",
        dutch_white: theme.colors.dutch_white,
        plum: theme.colors.plum,
        violet: theme.colors.violet,
        black: theme.colors.black,
        cambridge_blue: theme.colors.cambridge_blue,
      },
  },
  plugins: [],
};
