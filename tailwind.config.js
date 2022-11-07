/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors:{
      'white' : '	#ffffff',
      'light-grey': '#d6e2f0',
      'grayish-blue': '	#7b879d',
      'dark-blue': '#1f3251'

    },
    extend: {
      fontFamily:{
        outfit : ['Outfit', 'sans-serif']
      },
      fontWeight:{
        '400' : 400,
        '700' : 700
      }
    },
  },
  plugins: [],
}
