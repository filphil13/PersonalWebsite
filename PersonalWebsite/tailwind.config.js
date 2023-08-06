/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'color1':'#1F271B',
        'color2':'#19647E',
        'color3':'#28AFB0',
        'color4':'#F4D35E',
        'color5':'#EE964B',
      }
    },
    
  },
  plugins: [],
}

