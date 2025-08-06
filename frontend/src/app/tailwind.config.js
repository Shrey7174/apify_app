/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0d1117',       
        darkSurface: '#161b22', 
        lightText: '#c9d1d9',   
        accentBlue: '#58a6ff',   
        accentGreen: '#2ea043',  
      },
    },
  },
  plugins: [],
}
