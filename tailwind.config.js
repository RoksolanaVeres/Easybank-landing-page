/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    screens: {
      sm: "380px",
      md: "650px",
      lg: "900px",
      xl: "1350px",
    },
    extend: {
      colors: {
        // primary
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        limeGreenOpaque: "hsla(136, 65%, 51%, 0.5)",
        brightCyan: "hsl(192, 70%, 51%)",
        brightCyanOpaque: "hsl(192, 70%, 51%, 0.5)",
        //  neutral
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
        darkBlueOpaque: "rgba(51, 53, 72, 0.538)",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
      maxHeightheight: {
        maxPhotoHeight: "200px",
      },
    },
  },
  plugins: [],
};
