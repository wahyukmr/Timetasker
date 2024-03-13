module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'import/order': [
      'error',
      {
        'newLines-between': 'always',
        alphabetize: {order: 'asc'},
      },
    ],
  },
};
