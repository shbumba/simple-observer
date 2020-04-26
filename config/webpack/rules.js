const env = process.env.NODE_ENV
const isDevelopment = env === 'development'

export default [
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true,
      },
    },
  }
]
