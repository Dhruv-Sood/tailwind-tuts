/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens:{
        'mb': '325px',
      }
    },
  },
  plugins: [],
}

