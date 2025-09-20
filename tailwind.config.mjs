const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './.storybook/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
        colors:{
            lightHover:"#fcf4ff",
            darkHover:"#2a004a",
            darkTheme:"#11001F",
        },
        fontFamily:{
            Outfit:['Outfit', 'sans-serif'],
            Ovo:['Ovo', 'serif'],
        }
    },
  },
    plugins: [],
}