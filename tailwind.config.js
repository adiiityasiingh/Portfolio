// /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};