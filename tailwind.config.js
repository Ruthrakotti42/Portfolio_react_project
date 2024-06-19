/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'secondary':'rgb(11, 7, 41)'
      }
    },
    fontfamily:{
      Display:['Cinzel' ] 
  }
  },
  plugins: [],
}

