/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'valera': ['Varela'],
        'railway': ['Railway'],
      },
      colors: {
        blue: {
          'secondary' : '#3254a3',
          'primary' : '#244288'
        },
        orange: {
          'primary': '#ff8460'
        }
      }
    },
  },
  plugins: [],
}
