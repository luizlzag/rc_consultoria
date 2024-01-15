import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f2f2f2",
        "gray-50": "#d9d9d9",
        "gray-100": "#bfbfbf",
        "gray-500": "#666666",
        "primary-100": "#0A1130",
        "primary-300": "#a3b5e0",
        "primary-500": "#5071a5",
        "secondary-400": "#BF8D39",
        "secondary-500": "#d4af37",
        "whitergb":"rgba(255, 255, 255, 0.8)",
      },
      backgroundImage:{
        'parallax':'url("/banner-logo-04.jpg")',
        'banner2': 'url("/banner02.jpg")',
        'banner3': 'url("/banner03.png")'
      },
    },
  },
  plugins: [],
}
export default config
