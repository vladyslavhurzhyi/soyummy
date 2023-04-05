/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/salat.png')",
      },
      colors: {
        accentMain: '#8BAA36',
        accentLighter: '#EBF3D4',
        accentDark: '#22252A',
        accentDarker: '#1E1F28',
        accentHalfDark: '#2A2C36',
        accentGray: '#D9D9D9',
        mainText: '#001833',
        secondaryText: '#3E4462',
        whiteText: '#FAFAFA',
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
        customShoppingList: ['12px', '18px'],
        customXxs: ['14px', '14px'],
        customXs: ['14px', '21px'],
        customSm: ['16px', '20px'],
        customBase: ['24px', '24px'],
        customLg: ['28px', '28px'],
        customXl: ['32px', '32px'],
        customXxl: ['44px', '44px'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
