/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // responsive breakpoints
    screens:{
      sm:'480px',
      md:'768px',
      lg:'992px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        opensens: " 'Open Sans', sans-serif",
      },
      // custom colors
      colors:{
        primary: '#7843E9'
      }
    },
  },
  plugins: [],
}

