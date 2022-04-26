const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const babelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.21', // should match major/minor version in lockfile
        debug: isDev,
        modules: 'auto',
        useBuiltIns: isTest ? 'entry' : 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        // https://babeljs.io/docs/en/babel-preset-react#runtime
        // with this runtime we don't need to `import React` in every .jsx file
        runtime: 'automatic',
        development: isDev,
      },
    ],
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      { ssr: false, displayName: true, fileName: false, namespace: 'sc' },
    ],
  ],
  ignore: [/\/core-js/],
  overrides: [
    {
      test: './node_modules',
      sourceType: 'unambiguous',
    },
  ],
};

module.exports = babelConfig;
