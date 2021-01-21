const path = require('path')

module.exports = {
  purge: [path.join(__dirname, './layouts/**/*.html')],
  theme: {
    darkSelector: '.dark',
    typography: (theme) => ({
      default: {
        css: {
          '*,*::before,*::after': {
            borderColor: theme('colors.grey.light'),
          },
          color: theme('colors.body'),
          h1: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.2xl'),
            fontWeight: 700,
          },
          h2: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.xl'),
            fontWeight: 700,
          },
          h3: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.lg'),
            fontWeight: 700,
          },
          h4: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.base'),
            fontWeight: 500,
          },
          h5: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.sm'),
            fontWeight: 500,
          },
          h6: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.sm'),
            fontWeight: 400,
          },
          p: {
            color: theme('colors.headings'),
            fontSize: theme('fontSize.sm'),
            fontWeight: 400,
          },
          'ul > li::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: theme('colors.grey.dark'),
            borderRadius: '50%',
          },
          a: {
            borderBottom: `1px dotted ${theme('colors.grey.darker')}`,
            color: theme('colors.current'),
            fontWeight: theme('fontWeight.medium'),
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: theme('colors.black'),
              color: theme('colors.white'),
              borderBottom: 'none',
            },
          },
          pre: {
            backgroundColor: theme('colors.bg'),
            border: `1px solid ${theme('colors.grey.light')}`,
            color: theme('colors.body'),
            fontFamily: theme('fontFamily.mono'),
          },
          'pre code': {
            fontSize: theme('text.sm'),
          },
          'pre code::before': {
            content: 'inherit',
          },
          'pre code::after': {
            content: 'inherit',
          },
          code: {
            color: theme('colors.body'),
            fontFamily: theme('fontFamily.mono'),
          },
          strong: {
            color: theme('colors.body'),
            fontWeight: 600,
          },
          thead: {
            borderBottomColor: theme('colors.grey.light'),
          },
          tbody: {
            tr: {
              borderBottomColor: theme('colors.grey.light'),
            },
          },
          figure: {
            figcaption: {
              color: theme('colors.grey.darkest'),
              fontFamily: theme('fontFamily.display'),
            },
          },
          blockquote: {
            color: theme('colors.grey.darkest'),
          },
        },
      },
    }),
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-display)',
      mono: 'var(--font-display)',
      sans: 'var(--font-display)'
    },
    screens: {
      sm: '640px',
    },
    extend: {
      colors: {
        bg: 'var(--colors-bg)',
        body: 'var(--colors-body)',
        headings: 'var(--colors-headings)',
        primary: 'var(--colors-primary)',
        'primary-light': 'var(--colors-primary-light)',
        'primary-lightest': 'var(--colors-primary-lightest)',
        secondary: 'var(--colors-secondary)',
        tertiary: 'var(--colors-tertiary)',
        quaternary: 'var(--colors-quaternary)',
        black: 'var(--colors-black)',
        white: 'var(--colors-white)',
        'active-link': 'var(--colors-active-link)',
        grey: {
          lightest: 'var(--colors-grey-lightest)',
          light: 'var(--colors-grey-light)',
          medium: 'var(--colors-grey-medium)',
          dark: 'var(--colors-grey-dark)',
          darker: 'var(--colors-grey-darker)',
          darkest: 'var(--colors-grey-darkest)',
        },
      },
      fontSize: {
        xxs: '0.65rem',
      },
      borderColor: (theme) => ({
        default: theme('colors.grey-light'),
      }),
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
    display: ['dark', 'responsive'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')(),
  ],
}
