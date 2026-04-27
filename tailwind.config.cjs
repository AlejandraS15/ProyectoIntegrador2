module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        dental: {
          dark: '#1A0F0A',
          brown: '#5D4037',
          gold: '#BFA76A',
          beige: '#F5F5DC',
          ivory: '#FFFDF5',
          cream: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    }
  },
  plugins: []
};
