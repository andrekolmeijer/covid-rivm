module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
