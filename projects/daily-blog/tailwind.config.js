/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Você pode adicionar outras extensões de tema específicas para daily-brief aqui
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        dark: '#1F2937',
      },
    },
  },
  plugins: [
    // Adicione plugins específicos para daily-brief aqui, se necessário
  ],
};
