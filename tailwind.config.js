/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}

