/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#00A19C',
          red: '#E31E24',
        }
      },
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};