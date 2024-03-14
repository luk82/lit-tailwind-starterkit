/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.js', './index.html'],
  theme: {
    extend: {
      // colors: {
      //   color_1: 'rgb(var(--color-1) / <alpha-value>)',
      //   color_2: 'rgb(var(--color-2) / <alpha-value>)',
      //   color_3: 'rgb(var(--color-3) / <alpha-value>)',
      //   color_4: 'rgb(var(--color-4) / <alpha-value>)',
      // },
    },
  },
  plugins: [],
  darkMode: 'class',
};
