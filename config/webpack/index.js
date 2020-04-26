import entry from './entry'
import plugins from './plugins'
import rules from './rules'

import * as path from 'path'
import merge from 'webpack-merge'

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const entryConfig = merge(entry, {
  plugins,
  mode: isProduction ? 'production' : 'development',
  module: { rules },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      src: path.resolve(process.cwd(), 'src'),
    },
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: isProduction ? false : 'source-map',
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
}),

export default entryConfig
