/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./startups-data.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      }
    }
  },
  safelist: [
    'dark',
    'hidden',
    'active',
    'bg-slate-800',
    'text-white',
    'text-slate-400',
    'bg-emerald-950/70',
    'text-emerald-400',
    'border-emerald-800/60',
    'bg-blue-950/70',
    'text-blue-400',
    'border-blue-800/60',
    'bg-amber-950/70',
    'text-amber-400',
    'border-amber-800/60',
    'bg-rose-950/70',
    'text-rose-400',
    'border-rose-800/60',
    'border-slate-700',
    'bg-slate-900',
    'text-slate-300',
    'border-emerald-700/60',
    'bg-emerald-950/40',
    'text-emerald-200',
    'border-red-700/60',
    'bg-red-950/40',
    'text-red-200',
    'min-h-[28px]',
    'min-w-[28px]'
  ],
  plugins: [],
}
