/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      "ashgray" : "#7C7C7C",
      "black" : "#000000",
      "white" : "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}

