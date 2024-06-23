/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: {
        900: "#24053E",
      },
      white: "#fff",
      green: {
        500: "#44FFA1",
      },
      gray: {
        500: "#FCF8FF",
      }
    },
    fontFamily: {
      'body': ['Manrope', 'sans-serif'],
      'abhaya': ['abhaya', 'serif'],
      'manrope-regular': ['manrope-regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

