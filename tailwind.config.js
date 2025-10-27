/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0a0a0a',
          section: '#0f0f0f',
          gradientDark: '#111111',
          gold: '#FFD700',
          orange: '#FFA500',
          orchid: '#DA70D6',
          mediumPurple: '#9370DB',
          blueViolet: '#8A2BE2',
          indigo: '#4B0082',
        },
      },
      fontFamily: {
        title: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '24px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
};