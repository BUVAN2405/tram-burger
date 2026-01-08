/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plaster: ['"Plaster"', 'system-ui'],
        // 'inter' is often used as default sans, but user requested Poppins
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#0f0f0f',
        'brand-orange': '#ff6b00',
        'brand-gray': '#1a1a1a',
      }
    },
  },
  plugins: [],
}
