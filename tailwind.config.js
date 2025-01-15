/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        blueBGA: "#4318FF"
      },
      backgroundColor: {
        blueBGA: '#4318FF'  
      }
    },
  },
  plugins: [],
}