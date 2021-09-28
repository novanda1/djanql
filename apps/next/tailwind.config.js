module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        whiteme: "#efefef"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
