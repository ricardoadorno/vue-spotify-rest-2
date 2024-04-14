/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--spotify-green)',
        dark: 'var(--spotify-dark)',
        'light-dark': 'var(--spotify-light-dark)',
        gray: 'var(--spotify-gray)'
      }
    }
  },
  plugins: []
}
