/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1e293b',
          secondary: '#3d4b64',
        },
      },

    },
  },
  plugins: [],
}

