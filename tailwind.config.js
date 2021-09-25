module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        purple:'#4B3869',
        ligthPurple:'#664E88',
        black:'#000000',
        blue:'#22577A',
        transparent:'transparent',
        white:'white',
        green:'#152D35',
        greenLi:'#BEDBBB',
        red:'#FF0000',
        dark:'#3DB2FF',
        grey:'#F3F1F5'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
