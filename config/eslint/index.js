module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parser': 'babel-eslint',
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
  },
  plugins: ['prettier'],
}
