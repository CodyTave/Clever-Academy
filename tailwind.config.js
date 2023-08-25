/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#009fe3"],
        secondary: ["#2b2c6b", "#916dde", "#ebebff", "#6163b4", "#23245d"],
        dark: [""],
        light: ["#ebebff"],
        ph: ["#ababc4", "#e3e3ec", "#f4f4f4", "#636496"],
      },
      backgroundColor: {
        primary: ["#009fe3"],
        secondary: ["#2b2c6b", "#916dde", "#ebebff", "#6163b4", "#23245d"],
        dark: [""],
        light: ["#ebebff"],
        ph: ["#ababc4", "#e3e3ec", "#f4f4f4", "#636496"],
      },
      screens: {
        xxs: "350px",
        xs: "420px",
        sm: "640px",
        md: "768px",
        xmd: "820px",
        mlg: "900px",
        lg: "1024px",
        xlg: "1150px",
        mxl: "1370px",
        xl: "1536px",
        xxxl: "1700px",
      },
      boxShadow: {
        neo: "10px 5px 0 0 rgba(235,235, 255, 1)",
      },
    },
  },
  plugins: [],
};
