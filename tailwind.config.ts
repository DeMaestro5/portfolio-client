import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAFA',
          200: '#E0E0E0',
          500: '#8C8C8C',
          600: '#737373',
          700: '#525252',
          900: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
