/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  
        'xs': '375px',  
        'sm': '425px', 
        'mdl': '1024px', 
      },
    },
  },
  plugins: [],
}

