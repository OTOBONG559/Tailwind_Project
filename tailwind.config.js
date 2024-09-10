/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {


      keyframes:{
        'open-menue': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(0)'},
        },
      },


      animation: {
        'open-menue': 'open-menue 0.5s ease-in-out forward',
      }

    },
  },
  plugins: [],
}

