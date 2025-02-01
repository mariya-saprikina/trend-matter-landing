/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        bricolage_grotesque: ['var(--font-bricolage-grotesque)'],
        source_sans_3: ['var(--font-source-sans-3)'],
      },
      colors: {
        primary: '#0A3E45',
        secondary: '#F8F8F7',
        brand: '#147885',
        light_grey: '#A6A6A6',
        light_light_grey: '#EAECEE',
        dark_grey: '#454545',
        dark_dark_grey: '#2C2C2C',
        midnight_grey: '#344054',
        dusty_sky: '#D0D5DD',
        ash_blue: '#667085',
        neutral: '#C8C8C8',
      },
      fontSize: {
        hero: ['72px', '80px'],
        h1: ['64px', '72px'],
        h2: ['36px', '40px'],
        h3: ['30px', '34px'],
        h4: ['20px', '22px'],
        body1: ['28px', '36px'],
        body2: ['20px', '28px'],
        body3: ['18px', '22px'],
        body4: ['16px', '20px'],
        body5: ['14px', '18px'],
      },
      animation: {
        // Fade up and down
        'fade-up': 'fade-up 0.5s',
        'fade-down': 'fade-down 0.5s',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Fade up and down
        'fade-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '80%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '80%': {
            opacity: 0.6,
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': {opacity: 0, transform: 'translateY(6px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        'slide-down-fade': {
          '0%': {opacity: 0, transform: 'translateY(-6px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    // plugin(({addVariant}) => {
    //   addVariant('radix-side-top', '&[data-side="top"]');
    //   addVariant('radix-side-bottom', '&[data-side="bottom"]');
    // }),
  ],
};
