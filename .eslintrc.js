module.exports = {
  extends: ['@wistia/eslint-config/react', '@wistia/eslint-config/styled-components'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-sort-props': 2,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
