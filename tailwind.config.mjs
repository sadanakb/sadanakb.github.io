/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#111118',
        'surface-raised': '#1a1a25',
        ink: '#e4e4ef',
        accent: '#22d3ee',
        muted: '#6b6b80',
        border: '#1e1e2e',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: 'clamp(3.75rem, 8vw, 8rem)',
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
      maxWidth: {
        prose: '48rem',
      },
      backgroundImage: {
        'gradient-mesh':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.08), transparent),' +
          'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(34, 211, 238, 0.04), transparent),' +
          'radial-gradient(ellipse 50% 60% at 10% 80%, rgba(167, 139, 250, 0.04), transparent)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 211, 238, 0.15)',
        'glow-lg':
          '0 0 40px rgba(34, 211, 238, 0.2), 0 0 80px rgba(34, 211, 238, 0.1)',
      },
    },
  },
  plugins: [],
};
