/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-advanced-variables': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-extend': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    },
    autoprefixer: {}
  }
}