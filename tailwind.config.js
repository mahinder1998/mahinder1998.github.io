/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    // responsive breakpoint
    // screens:{
    //   sm: '480px',
    //   md: '786px',
    //   lg: "976px",
    //   xl: "1440px"
    // },
    extend: {
      // custom colors
      colors:{
        primary: '#0bbc7',  
        secondary: '#63b6fe',
        gray: '#666' 
      },
      // font family
      fontFamily:{
        poppins:"'Poppins', sans-serif",
      },
      // height
      height: {
        'screen-minus-80': 'calc(100vh - 80px)',
      }
    },
  },
  plugins: [],
};
