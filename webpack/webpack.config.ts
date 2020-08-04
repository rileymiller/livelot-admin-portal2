import * as path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack';

const configBuilder = (env: any) => {
  const isDevBuild = !(env?.prod);
  console.log(`isDevBuild ${isDevBuild}`)
  const config: Configuration = {
    mode: isDevBuild ? `development` : `production`,

    // Enable sourcemaps for debugging webpack's output.
    devtool: `source-map`,

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [`.js`, `.jsx`, `.ts`, `.tsx`]
    },

    output: {
      filename: `livelot-admin-min.js`,
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: `ts-loader`
            }
          ]
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: `pre`,
          test: /\.js$/,
          loader: `source-map-loader`
        }
      ]
    },

    devServer: {
      contentBase: path.join(__dirname, `../dist`),
      compress: true,
      port: 6931,
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //   "react": "React",
    //   "react-dom": "ReactDOM"
    // },

    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html'
      })
    ]
  }
  return config
}

export default configBuilder