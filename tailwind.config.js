/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#146eb4',
        customDarkBlue: '#0e4f82',
        customSideBarBlue: '#1e2640',
        customAppBg: '#fafafa',
        customTextColor: '#4D4D4D',
        customNextDateColor: '#F2F2F2',
        customHeaderBtnBg: '#E6E6E6',
        customSectionTextColor: '#1A181E',
        customBtnTextColor: '#808080',
        customFooterTextColor: '#6B7280',
        customSideBarTextColor: '#D2D4D9',
        customHoverBgColor: '#FFFFFF1A',
        customAvailableColorBg: '#353C53'
      }
    },
  },
  plugins: [],
}

