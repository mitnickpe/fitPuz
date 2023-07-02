/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-mixins': {},
    'postcss-extend': {},
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    },
    autoprefixer: {}
  }
}