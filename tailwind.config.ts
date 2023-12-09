import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: ['./src/**/*.{html,ts,css,scss}'],
  theme: {
    colors: {
      white: '#ffffff',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      info: '#3498db', // Info rengi
      success: '#2ecc71', // Success rengi
      error: '#e74c3c', // Error rengi
      warning: '#f39c12', // Warning rengi
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    backgroundColor: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      info: '#3498db', // Info rengi
      success: '#2ecc71', // Success rengi
      error: '#e74c3c', // Error rengi
      warning: '#f39c12', // Warning rengi
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;
