import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        '2xs': '380px',
        'xs': '480px',
        'sm': '640px',
        'sm-md': '700px',
        'md': '768px',
        'md-lg': '900px',
        'lg': '1024px',
      },
      fontFamily: {
        primary: ['Le-Murmure', 'sans-serif'],
        secondary: ['LiberationSans', 'sans-serif'],
      },
      colors: {
        primary: '#333',
        secondary: {
          100: '#F7F7F7',
          200: '#EDEDED',
          300: '#D6D6D6',
          400: '#A3A3A3',
          500: '#4D4D4D',
        },
        squeleton: {
          300: "#dcdcdc",
          400: "#D9D9D9",
        }
      },
      fontSize: {
        '8.5xl': '7.5rem',
        '9.5xl': '8.5rem',
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '15xl': '13.5rem',
      },
    }
  },

  plugins: []
} satisfies Config;
