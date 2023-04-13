/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },
      backgroundImage: {
        gradientStop: 'linear-gradient(180deg, #ECECEC 53%, #1E1F28 0%)',
        recipePage: "url('/src/images/recipePage.jpg')",
        hero: "url('/src/images/salat.png')",
        main_d: "url('/src/images/bg_main-desc.png')",
        main_t: "url('/src/images/bg_main-tablet.png')",
        main_m: "url('/src/images/bg_main-mob.png')",
        mob_menu_leaf: "url('/src/images/bgLeafMobMenu.png')",
        tablet_mob_menu_leaf: "url('/src/images/bgLeafTabletMobMenu.png')",
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
        greyInput: '#BDBDBD',
        listUnderline: '#E0E0E0',
        greenSelectArrow: '8BAA36',
      },
      boxShadow: {
        custom: '0px 4px 4px rgba(135, 135, 135, 0.2)',
      },
      spacing: {
        '52px': '52px',
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
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
      border: { grey1: '#F0F0F0' },
      height: {
        13: '51px',
        48.5: '777px',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    // ...
  ],
};
