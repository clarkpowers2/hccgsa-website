/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { 'haven-navy': '#0A1628', 'haven-gold': '#C9A84C' }, fontFamily: { sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'] } } },
  plugins: [],
}
