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
      colors: {
        primary: '#0ea5e9',
        secondary: '#4ade80',
        abu: '#f1f5f9',
        dark: '#0f172a'
      }
    },
  },
  plugins: [],
}

