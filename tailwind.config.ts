const defaultTheme = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      width: {
        '7xl': '1172px',
      },
    },
  },
  plugins: [],
} satisfies Config;
