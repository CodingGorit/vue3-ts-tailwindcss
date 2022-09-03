module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  plugins: [
    require('preline/plugin')
  ],
}
