/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'body': ['"Poppins"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

