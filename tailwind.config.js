/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      screens: {},
      fontFamily : { 
        'Lugrasimo': ['Lugrasimo', 'cursive'],
        'VarelaRound' : ['Varela Round', 'sans-serif'],
        'Ubuntu': ['Ubuntu', 'sans-serif']
      }
  },
  plugins: [],
}
}
