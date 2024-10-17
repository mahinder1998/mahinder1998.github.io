/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // responsive breakpoint
    screens:{
      sm: '480px',
      md: '786px',
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      // custom colors
      colors:{
        primary: '#0bbc7',  
        secondary: '#63b6fe'     
      },
      // font family
      fontFamily:{
        opensens: " 'Open Sans', sans-serif",
        raleway: "'Raleway', sans-serif"
      }

    },
  },
  plugins: [],
};
