const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodePath = require('path');

const isDev = Boolean(process.env.WEBPACK_DEV_SERVER);



module.exports = {

  target: 'web',

  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : 'none',

  entry: {
    app: nodePath.resolve(__dirname, 'src/index.js')
  },

  output: {
    filename:
      isDev ?
        'assets/[name].js' :
        'assets/[name].[contenthash].js'
    ,
    path: nodePath.resolve(__dirname, 'build')
  },


  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js(x?))$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: isDev ? true : false,
            }
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              sourceMap: isDev ? true : false,
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[name]-[local]',
              },
            }
          }
        ],
      },

      {
        test: /\.styl$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: isDev ? true : false,
            }
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              sourceMap: isDev ? true : false,
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[name]-[local]',
              },
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              import: [
                nodePath.resolve(__dirname, './node_modules/nib/index.styl'),
                nodePath.resolve(__dirname, './stylus.config.styl')
              ]
            }
          }
        ],
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: nodePath.resolve(__dirname, 'src/index.html')
    }),

    new MiniCssExtractPlugin({
      filename: isDev
        ? '[name].css'
        : 'assets/[name].[contenthash].css'
      ,
    }),

    isDev && new ReactRefreshWebpackPlugin(),
  ]

  // filter booleans
  .filter(p => typeof p !== 'boolean'),


  stats: isDev ? 'errors-only' : 'normal',

  optimization: {
    usedExports: true,
    moduleIds: 'hashed',
    runtimeChunk: 'single',

    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },

    minimize: isDev ? false : true,

    minimizer: [
      new TerserPlugin({
        cache: true,
        extractComments: false,
        sourceMap: true,
        terserOptions: {
          parallel: true,

          mangle: true,
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5
          },
          output: {
            comments: false,
          },
        }
      }),

      new OptimizeCSSAssetsPlugin({})
    ],
  },

  devServer: {
    contentBase: nodePath.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true,
    clientLogLevel: 'none',
  },

}
