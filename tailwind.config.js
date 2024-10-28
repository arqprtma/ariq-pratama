/** @type {import('tailwindcss').Config} */

import tailwindScroolbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Primary': ['Montserrat'],
      },
    },
  },
  plugins: [tailwindScroolbar],
}

