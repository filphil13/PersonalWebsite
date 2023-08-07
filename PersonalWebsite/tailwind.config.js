/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      colors:{
        'color1':'#000000',
        'color2':'#14213d',
        'color3':'#fca311',
        'color4':'#e5e5e5',
        'color5':'#ffffff',
      }
    },
    
  },
}

