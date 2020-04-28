module.exports = {
  presets: ['gatsby'],
  plugins: [
    'react-require',
    'ramda',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};
