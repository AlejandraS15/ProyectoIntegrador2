module.exports = {
  content: ["./src/views/**/*.ejs", "./public/js/**/*.js"],
  safelist: [
    "clinic-chatbot__message",
    "clinic-chatbot__message--bot",
    "clinic-chatbot__message--user",
    "clinic-chatbot__cta-text",
    "clinic-chatbot__booking-link",
    "clinic-chatbot__typing"
  ],
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
