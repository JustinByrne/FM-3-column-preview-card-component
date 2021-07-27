module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        vdarkCyan: 'hsl(179, 100%, 13%)',
        vlightGray: 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        deca: 'Lexend Deca, sans-serif',
        shoulders: 'Big Shoulders Display, cursive',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
