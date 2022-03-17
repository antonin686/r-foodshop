module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
        'screen-75': '75vh'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      colors: {
        'theme': 'rgb(239, 68, 68)',
        'theme-light': 'rgb(254, 202, 202)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
