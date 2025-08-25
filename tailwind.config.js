/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
  safelist: [
    // Ensure all color variations are included
    'bg-amber-600', 'bg-slate-600', 'bg-sky-600', 'bg-violet-600', 'bg-emerald-600',
    'shadow-amber-600/50', 'shadow-slate-600/50', 'shadow-sky-600/50', 'shadow-violet-600/50', 'shadow-emerald-600/50',
    'text-amber-200', 'text-slate-200', 'text-sky-200', 'text-violet-200', 'text-emerald-200'
  ]
}