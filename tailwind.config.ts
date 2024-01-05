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
        "primary-100": "#d6dbf5",
        "primary-300": "#a3b5e0",
        "primary-500": "#5071a5",
        "secondary-400": "#e6bf83",
        "secondary-500": "#d4af37",
      },
      backgroundImage:{
        'parallax':'url("/banner-logo-04.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
