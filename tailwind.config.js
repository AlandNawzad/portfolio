/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        portfolio: {
          background: '#0A111E',       // Main page background
          surface: '#151C28',          // Borders, subtle accents, active states
          primary: '#58A0C8',      // Buttons, links, hovers
          primaryText: '#E0E1DD',       // Primary text
          secondaryText: '#BABEC4'

        },
      },
    },
  },
  plugins: [],
}

