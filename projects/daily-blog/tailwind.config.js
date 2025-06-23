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
      colors: {
        'db-dark-bg': '#181e26',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Texto principal
            color: theme('colors.gray.800'),
            fontFamily: 'Inter, sans-serif',
            maxWidth: 'none',
            // Cabeçalhos
            h1: {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.100'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.4'),
            },
            h3: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.800'),
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.3'),
            },
            // Parágrafos
            p: {
              lineHeight: theme('lineHeight.relaxed'),
              marginBottom: theme('spacing.4'),
            },
            // Links
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.500'),
                textDecoration: 'none',
              },
            },
            // Listas
            ul: {
              listStyleType: 'disc',
              marginBottom: theme('spacing.4'),
              paddingLeft: theme('spacing.6'),
            },
            li: {
              marginBottom: theme('spacing.2'),
            },
            // Estilo para modo escuro
            '.prose-invert': {
              color: theme('colors.gray.200'),
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.100') },
              h3: { color: theme('colors.gray.200') },
              a: {
                color: theme('colors.blue.400'),
                '&:hover': {
                  color: theme('colors.blue.300'),
                },
              },
              ul: {
                listStyleType: 'disc',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    // Adicione plugins específicos para daily-brief aqui, se necessário
  ],
};
