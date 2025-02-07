import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
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
        squeleton: "#D9D9D9"
      },
    }
  },

  plugins: []
} satisfies Config;
