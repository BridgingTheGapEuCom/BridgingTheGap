/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/**/*.html',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },
      boxShadow: {
        up: '0 2px 6px -1px'
      },
      fontSize: {
        sm: '0.78rem',
        base: '1.05rem',
        xl: '1.33rem',
        '2xl': '1.67rem',
        '3xl': '1.75rem'
      },
      backgroundColor: 'rgb(10,10,10)'
    }
  },
  plugins: [require('flowbite/plugin')]
}
