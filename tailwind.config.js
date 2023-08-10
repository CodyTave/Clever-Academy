/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#009fe3"],
        secondary: ["#2b2c6b", "#916dde"],
        dark: [""],
        light: ["#ebebff"],
      },
      backgroundColor: {
        primary: ["#009fe3"],
        secondary: ["#2b2c6b", "#916dde"],
        dark: [""],
        light: ["#ebebff"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xlg: "1150px",
        mxl: "1370px",
        xl: "1536px",
        xxxl: "1700px",
      },
    },
  },
  plugins: [],
};
