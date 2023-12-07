/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'min': '767px'},
      
    }
  },
  plugins: [],
}
