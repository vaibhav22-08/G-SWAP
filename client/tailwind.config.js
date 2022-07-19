module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-out',
        dissolve:'dissolve 1s ease-in'
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': {opacity: "0%" },
          '100%': {opacity: "100%"},
        },
        dissolve:{
          '0%': {opacity: "100%" },
          '100%': {opacity: "0%"},
        }
      }),
      
      fontFamily:{
        spot:['spot'],
        styrene:['Styrene B']
      }
    },
  },
  plugins: [],
}
