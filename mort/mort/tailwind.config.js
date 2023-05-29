const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      xxs: '374px',
      xs: '384px',
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        economica: 'Economica, sans-serif',
        playfair: 'Playfair Display SC, serif',
      },
      screens: {
        sm: '400px',
        // 'ms': '539px',
        // 'mx': '767px',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
