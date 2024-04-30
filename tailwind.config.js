/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        sm:"570px",
        md:"768px",
        lg:"992px",
        xl:"1024px",
        xxl:"1199px",
        xxxl:"1440px",
        xxxxl:"1920px"
      },
      colors:{
        primary: "#448EE4"
      }
    },
  },
  plugins: [],
}