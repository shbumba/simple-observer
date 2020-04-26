module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.6',
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-typescript', { allowNamespaces: true }],
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    '@babel/plugin-syntax-dynamic-import',
  ],
}
