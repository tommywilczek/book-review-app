module.exports = {
    extends: [
      'codingitwrong',
    ],
    parser: 'babel-eslint',
    plugins: [
        'jest',
        'react',
        'cypress'
    ],
    env: {
        'jest/globals': true,
        'browser': true,
      }
};