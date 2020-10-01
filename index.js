module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/no-danger': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': ['off', 'never'],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-absolute-path': 0,
    'import/no-duplicates': 0,
    'import/no-named-as-default-member': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': ['warn', 'never']
  },
  plugins: ['prettier', 'react-hooks']
};
