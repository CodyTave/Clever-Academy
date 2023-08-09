/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#009fe3"],
        secondary: ["#2b2c6b"],
        dark: [""],
        light: ["#ebebff"],
      },
      backgroundColor: {
        primary: [""],
        secondary: [""],
        dark: [""],
        light: [""],
      },
    },
  },
  plugins: [],
};
