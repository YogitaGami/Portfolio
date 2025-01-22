/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' },
      },
      gridTemplateRows: {
        'custom': '152px 28px 3px 1px 230px', // Custom row heights
      },
      gridTemplateColumns: {
        'custom': '290px 290px 260px', // Custom column widths
      },
    },
  },
  plugins: [],
}