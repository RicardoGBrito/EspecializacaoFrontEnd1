/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:{
      fontFamily: {
        Poppins:'Poppins'},

      colors:{
        b_ground:'#1e1e1e',
        f_input_color: '#00081d',
      },
      
    },
    
  },
  plugins: [],
}

