module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0030B8',
        seconary: '#666666'
      }
    }

  },
  variants: {
    extend: {
      // ...
      borderStyle: ['hover'],


    }
  },
  plugins: [],
}
