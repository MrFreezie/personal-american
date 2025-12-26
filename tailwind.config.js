/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        terminal: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        apocalypse: {
          orange: '#FF6B35',
          brown: '#8B4513',
          red: '#CD5C5C',
          green: '#4ade80',
          metal: '#71797E',
        },
      },
      backgroundImage: {
        'wasteland': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071')",
        'tank': "url('/assets/m3 stuart tank by grok for book.jpg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};