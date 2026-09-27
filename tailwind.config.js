/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: defaultTheme.screens,
    spacing: defaultTheme.spacing,
    maxWidth: defaultTheme.maxWidth,
    maxHeight: defaultTheme.maxHeight,
    zIndex: defaultTheme.zIndex,
    gridTemplateColumns: defaultTheme.gridTemplateColumns,
    transitionDuration: { ...defaultTheme.transitionDuration, 400: '400ms' },
    transitionDelay: { ...defaultTheme.transitionDelay, 400: '400ms' },
    transitionTimingFunction: defaultTheme.transitionTimingFunction,
    fontWeight: defaultTheme.fontWeight,
    letterSpacing: defaultTheme.letterSpacing,
    lineHeight: defaultTheme.lineHeight,
    backgroundSize: defaultTheme.backgroundSize,
    backgroundPosition: defaultTheme.backgroundPosition,
    backgroundRepeat: defaultTheme.backgroundRepeat,
    opacity: defaultTheme.opacity,
    boxSizing: defaultTheme.boxSizing,
    outlineColor: defaultTheme.outlineColor,
    ringWidth: defaultTheme.ringWidth,
    ringColor: defaultTheme.ringColor,
    ringOffsetColor: defaultTheme.ringOffsetColor,
    scale: defaultTheme.scale,
    transformOrigin: defaultTheme.transformOrigin,

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      primary: {
        DEFAULT: '#E96B3A', // Oranye / Terracotta
        50: '#FDF3EE',
        100: '#FAE4D8',
        200: '#F5C7B0',
        300: '#EEA184',
        400: '#EC8159',
        500: '#E96B3A',
        600: '#D1541F',
        700: '#A93F16',
        800: '#7E3011',
        900: '#57220C',
      },
      secondary: {
        DEFAULT: '#C4552B', // Terracotta deeper — hover / aksen gelap
        100: '#F7E3D9',
        300: '#D98A66',
        500: '#C4552B',
        600: '#B04420',
        700: '#8A3A1B',
      },

      cream: {
        DEFAULT: '#FAF6F1',
        50: '#FFFDFB',
        100: '#FAF6F1',
        200: '#F3EBE2',
        300: '#E9DCCF',
      },

      ink: {
        DEFAULT: '#1A1A1A', // Hitam / Navy gelap
        50: '#F6F6F6',
        100: '#E6E6E6',
        200: '#CFCFCF',
        300: '#A8A8A8',
        400: '#737373',
        500: '#4A4A4A', // Abu gelap — body text
        600: '#3A3A3A',
        700: '#2A2A2A',
        800: '#1A1A1A',
        900: '#0F0F0F',
      },

      blob: {
        pink: '#F5D9E8',
        lilac: '#E6DDF7',
        blue: '#DCE4F7',
        mint: '#DCEFE4',
        peach: '#FBE3D3',
        butter: '#F8EED6',
      },

      white: '#FFFFFF',
      surface: {
        DEFAULT: '#FFFFFF', // Card & container foto
        soft: '#FBF8F4',
        muted: '#F3EBE2',
        inverse: '#1A1A1A',
      },
      accent: {
        DEFAULT: '#E96B3A',
        gold: '#D9A441',
        leaf: '#5C7C5A',
        berry: '#B3455E',
      },
    },
    fontFamily: {
      serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
      sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      script: ['Caveat', 'cursive'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      'display-md': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      'display-lg': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      'display-xl': ['5.75rem', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
    },
    extend: {
      borderRadius: {
        ...defaultTheme.borderRadius,
        pill: '9999px',
        blob: '48% 52% 60% 40% / 45% 40% 60% 55%',
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        card: '0 18px 40px -24px rgba(26, 26, 26, 0.35)',
        'card-lg': '0 34px 70px -34px rgba(26, 26, 26, 0.45)',
        float: '0 22px 60px -28px rgba(233, 107, 58, 0.55)',
        pill: '0 12px 28px -12px rgba(233, 107, 58, 0.65)',
      },
      backgroundImage: {
        'gradient-blob':
          'radial-gradient(circle at 20% 20%, #F5D9E8 0%, transparent 55%), radial-gradient(circle at 80% 30%, #DCE4F7 0%, transparent 55%), radial-gradient(circle at 50% 80%, #FBE3D3 0%, transparent 60%)',
        'gradient-primary': 'linear-gradient(135deg, #E96B3A 0%, #C4552B 100%)',
        'gradient-ink': 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
        'gradient-card':
          'linear-gradient(160deg, rgba(250,246,241,0) 0%, rgba(250,246,241,0.9) 70%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
