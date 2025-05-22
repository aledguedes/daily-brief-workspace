/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      //   colors: {
      //     border: 'hsl(var(--border))',
      //     input: 'hsl(var(--input))',
      //     ring: 'hsl(var(--ring))',
      //     background: 'hsl(var(--background))',
      //     foreground: 'hsl(var(--foreground))',
      //     primary: {
      //       DEFAULT: 'hsl(var(--primary))',
      //       foreground: 'hsl(var(--primary-foreground))',
      //     },
      //     secondary: {
      //       DEFAULT: 'hsl(var(--secondary))',
      //       foreground: 'hsl(var(--secondary-foreground))',
      //     },
      //     destructive: {
      //       DEFAULT: 'hsl(var(--destructive))',
      //       foreground: 'hsl(var(--destructive-foreground))',
      //     },
      //     muted: {
      //       DEFAULT: 'hsl(var(--muted))',
      //       foreground: 'hsl(var(--muted-foreground))',
      //     },
      //     accent: {
      //       DEFAULT: 'hsl(var(--accent))',
      //       foreground: 'hsl(var(--accent-foreground))',
      //     },
      //     popover: {
      //       DEFAULT: 'hsl(var(--popover))',
      //       foreground: 'hsl(var(--popover-foreground))',
      //     },
      //     card: {
      //       DEFAULT: 'hsl(var(--card))',
      //       foreground: 'hsl(var(--card-foreground))',
      //     },
      //     sidebar: {
      //       DEFAULT: 'hsl(var(--sidebar-background))',
      //       foreground: 'hsl(var(--sidebar-foreground))',
      //       primary: 'hsl(var(--sidebar-primary))',
      //       'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
      //       accent: 'hsl(var(--sidebar-accent))',
      //       'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
      //       border: 'hsl(var(--sidebar-border))',
      //       ring: 'hsl(var(--sidebar-ring))',
      //     },
      //     dailybrief: {
      //       50: '#EAEDF7',
      //       100: '#D5DBF0',
      //       200: '#ABB7E0',
      //       300: '#8193D1',
      //       400: '#576FC1',
      //       500: '#3B82F6', // Primary blue
      //       600: '#2563EB',
      //       700: '#1D4ED8',
      //       800: '#1E293B', // Dark blue
      //       900: '#0F172A',
      //     },
      //   },
      //   borderRadius: {
      //     lg: 'var(--radius)',
      //     md: 'calc(var(--radius) - 2px)',
      //     sm: 'calc(var(--radius) - 4px)',
      //   },
      //   keyframes: {
      //     'accordion-down': {
      //       from: {
      //         height: '0',
      //       },
      //       to: {
      //         height: 'var(--radix-accordion-content-height)',
      //       },
      //     },
      //     'accordion-up': {
      //       from: {
      //         height: 'var(--radix-accordion-content-height)',
      //       },
      //       to: {
      //         height: '0',
      //       },
      //     },
      //   },
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
  plugins: [require('@tailwindcss/typography')],
};
