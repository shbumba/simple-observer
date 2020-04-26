import * as path from 'path'
// eslint-disable-next-line
import { Configuration } from 'webpack'
// eslint-disable-next-line
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

/** @type {Configuration} */
const config = {
  name: 'simple-observable',
  entry: {
    'simple-observable': [
      './src/index.ts',
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
}

export default config
