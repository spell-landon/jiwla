import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '7xl': '1172px',
      },
    },
  },
  plugins: [],
} satisfies Config;
