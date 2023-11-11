module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react'],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
