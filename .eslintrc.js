module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    // "no-console": "off",
    'react/jsx-filename-extension': 0,
  },
};
