const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodePath = require('path');
const glob = require('glob-all');


const isDev = Boolean(process.env.WEBPACK_DEV_SERVER)
const staticDir = 'static'



module.exports = [
  createWebpackConfig({
    name: 'public',
    port: process.env.HTML_PUBLIC_PORT,
    entry: {
      // mobile: './src/apps/mobile/mobile.js',
      index: './src/apps/desktop/desktop.js',
    },
  }),

  // createWebpackConfig({
  //   name: 'admin',
  //   port: process.env.HTML_ADMIN_PORT,
  //   entry: {
  //     index: './src/apps/admin/admin.js'
  //   },
  // })
]


function createWebpackConfig({name, entry, port}) {


  return {
    target: 'web',

    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : 'none',
    entry: entry,

    output: {
      path: nodePath.resolve(__dirname, `build/${name}`),
      filename:
        isDev
          ? `${staticDir}/[name].js`
          : `${staticDir}/[name].[contenthash].js`
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
          use: 'ts-loader'
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
                importLoaders: 2,
                sourceMap: isDev ? true : false,
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: '[name]_[local]',
                },
              }
            },

            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')(),
                  require('postcss-normalize'),

                  // require('@fullhuman/postcss-purgecss')({
                  //   content: glob.sync(
                  //     'src/**/*.{js,jsx,ts,tsx}', {nodir: true}
                  //   ),
                  //   keyframes: true,
                  //   fontFace: true,
                  //   variables: true,
                  //   rejected: true,
                  // }),
                ]
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

      ...Object.keys(entry).map(chunk => (
        new HtmlWebpackPlugin({
          template: 'src/lib/index.html',
          chunks: [chunk],
          filename: `${chunk}.html`
        })
      )),

      new MiniCssExtractPlugin({
        filename: isDev
          ? `${staticDir}/[name].css`
          : `${staticDir}/[name].[contenthash].css`
        ,
      }),

      isDev && new ReactRefreshWebpackPlugin({
        overlay: false
      }),

      !isDev && new FriendlyErrorsWebpackPlugin(),

      // !isDev && new BundleAnalyzerPlugin({
      //   analyzerPort: 'auto'
      // }),
    ]

    // filter booleans
    .filter(p => typeof p !== 'boolean'),


    stats: {
      entrypoints: false,
      children: false
    },

    performance: {
      hints: isDev ? false : 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

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
      hot: true,
      host: '0.0.0.0',
      port: port,
      overlay: true,
      clientLogLevel: 'none',
      historyApiFallback: true,
    },

  }
}

