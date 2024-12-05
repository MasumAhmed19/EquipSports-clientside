/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        p1:'#BDEC2F',
        p2:'#b6e626',
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}