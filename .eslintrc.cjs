module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    quotes: 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off'
  },
};
