/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['playfair', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'milker': ['Milker', 'sans-serif'],
      },
      colors: {
        'bright': '#e0dee1',
        'dark': '#020202',
        'accent' : '#d5393c',
    },
  },
  plugins: [],
}
}