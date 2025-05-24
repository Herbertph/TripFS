/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#003580',       
        secondary: '#0071c2',      
        accent: '#febb02',         
        textDark: '#1a1a1a',       
        textLight: '#4f4f4f',      
        background: '#f5f5f5',
      },
    },
  },
  plugins: [],
}

