/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"]
      },
      colors: {
        'custom-green': '#15803D',
        'grey': '#3d4249',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@xpd/tailwind-3dtransforms")
  ],
};
