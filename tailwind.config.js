module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {}

  },
  variants: {
    extend: {
      // ...
      borderStyle: ['hover'],


    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0030B8",

          "secondary": "#666666",

          "accent": "#07c417",

          "neutral": "#241E2A",

          "base-100": "#F2F2F3",

          "info": "#728ADA",

          "success": "#23E792",

          "warning": "#F7C655",

          "error": "#EC5569",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
