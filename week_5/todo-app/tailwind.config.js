/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#E6E6E6",
        darkGray: "#757575",
      },
    },
  },
  plugins: [], 
}

