/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0b10',
          card: '#12141f',
          border: '#1f2438',
          accent: '#6366f1',
          neon: '#06b6d4',
          gold: '#f59e0b',
          pink: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
