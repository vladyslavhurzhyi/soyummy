/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        accentMain: '#8BAA36',
        accentLighter: '#EBF3D4',
        accentDark: '#22252A',
        accentDarker: '#1E1F28',
        accentHalfDark: '#2A2C36',
        accentGray: '#D9D9D9',
        mainText: '#001833',
        secondaryText: '#3E4462',
      },
      spacing: {
        '52px': '52px',
      },
      fontFamily: {
        main: ['Poppins'],
      },
      fontSize: {
        customRecipesText: ['8px', '10px'],
        customRecipesTime: ['10px', '14px'],
        customXxs: ['14px', '14px'],
        customXs: ['14px', '21px'],
        customSm: ['16px', '20px'],
        customBase: ['24px', '24px'],
        customLg: ['28px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
        customXl: ['32px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        customXxl: ['44px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
