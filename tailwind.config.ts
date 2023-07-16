import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        corazonRed: '#8B0E04',
        mercadoRose: '#CF4240',
        pecanBrown: '#551900',
        riverwalkTeal: '#038391',
        rioBlue: '#A1CBC9',
        pearlWhite: '#EEEEEE',
        missionbellGrey: '#333333',
        conchaPink: '#E00490',
        nopalesGreen: '#09B081',
        fiestaGold: '#F7D002',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@headlessui/tailwindcss"),
  ],
} satisfies Config