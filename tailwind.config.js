/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue('--color-primary'),
      },
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
};
