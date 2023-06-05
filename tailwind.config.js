/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js}"],
  theme: {
    extend: { 
      backgroundImage: {
      },
      backgroundColor: {
        btn:'#263a6b',
        main: '#d32a2f'
      },
      textColor:{
        main: '#d32a2f'
      }
    },
  },
  plugins: [],
}

