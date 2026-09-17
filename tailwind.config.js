export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070A',
          900: '#0A0A0E',
          850: '#0F0F14',
          800: '#14141A',
          700: '#1C1C24',
          600: '#26262F',
        },
        mute: {
          400: '#8A8A99',
          300: '#A8A8B5',
          200: '#C9C9D2',
        },
        accent: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#22D3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderColor: {
        hairline: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        lift: '0 24px 60px -24px rgba(0,0,0,0.8)',
        panel: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 80px -40px rgba(0,0,0,0.9)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
