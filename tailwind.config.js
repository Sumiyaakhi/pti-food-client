/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ['Agbalumo', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        sedgwickAveDisplay: ['Sedgwick Ave Display', 'cursive'],
        teko: ['Teko', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

