/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f9ca24",
        input:"#f5f5f5",
        inputBorderColor:"#d1d1d1",
        inputTextColor:"#767676",
        bgModal: "#2b2b2b"
      },
      fontFamily:{
        Poppins:"Poppins"
      }
    },
  },
  plugins: [],
}

