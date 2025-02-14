/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandGreen:"#263C28",
        brandYellow:"#F7C35F",
        brandLightGreen:"#6D8C54",
        brandYellow1:"#D1B26A",
        brandGreen1:"#334B35",
        White:"#ffffff",
      },
      fontFamily:{
        inter:["Inter", 'serif'],
        noto:["Noto Sans Tamil", 'serif'],
        poppins:["Poppins", "serif"],
        'jim-nightshade':["Jim Nightshade", "cursive"],
      }
    },
  },
  plugins: [],
}

