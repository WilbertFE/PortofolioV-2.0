/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
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
        dark: '#0f172a',
        html: '#E34F26',
        css: '#1572B6',
        js: '#F7DF1E',
        tw: '#06B6D4',
      }
    },
  },
  plugins: [],
}

