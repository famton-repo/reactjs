/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        page: '#F5F7FA',
        sidebar: '#FFFFFF',
        primary: '#FF6B35',
        'card-white': '#FFFFFF',
        'text-primary': '#1A1A2E',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
        'navy': '#1A1A2E',
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '14px',
        'xl': '12px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.07)',
        'active-icon': '0 4px 12px rgba(255,107,53,0.35)',
        'btn': '0 4px 16px rgba(255,107,53,0.4)',
      },
    },
  },
  plugins: [],
}
