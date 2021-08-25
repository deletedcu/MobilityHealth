module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    quotes: ['error', 'single', {avoidEscape: true}],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    radix: ['error', 'as-needed'],
  },
};
