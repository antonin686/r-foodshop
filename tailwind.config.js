module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { height: '0px' },
          '50%': { height: '200px' },
          '100%': { height: '500px' },
        }
      }
    },
  },
  plugins: [],
}
