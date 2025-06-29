import { defineConfig } from 'tailwindcss/helpers'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#F7879A',
        mustard: '#EDC557',
        offwhite: '#F3F6F4',
        teal: '#3DADB7',
        periwinkle: '#7474BD',
      },
    },
  },
  plugins: [],
})
