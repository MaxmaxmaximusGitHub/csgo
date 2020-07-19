const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodePath = require('path');
const glob = require('glob-all');
const fs = require('fs')


const IS_DEV = Boolean(process.env.WEBPACK_DEV_SERVER)
const HTML_PUBLIC_PORT = process.env.HTML_PUBLIC_PORT
const HTML_ADMIN_PORT = process.env.HTML_ADMIN_PORT
const INDEX_STYLE = './src/styles/index.styl'
const INDEX_HTML = './src/lib/index.html'
const STATIC_DIR = 'static'

const ALIASES = {
  res: nodePath.resolve(__dirname, './src/res/')
}


module.exports = [
  createWebpackConfig({
    name: 'public',
    port: HTML_PUBLIC_PORT,
    entry: {
      // mobile: './src/apps/Mobile/Mobile.js',
      index: './src/apps/Desktop/Desktop.js',
    },
  }),

  // createWebpackConfig({
  //   name: 'admin',
  //   port: HTML_ADMIN_PORT,
  //   entry: {
  //     index: './src/apps/Admin/Admin.js'
  //   },
  // })
]


function createWebpackConfig({name, entry, port}) {

  entry = addStyleToEntry(entry, INDEX_STYLE)

  return {
    target: 'web',

    mode: IS_DEV ? 'development' : 'production',
    devtool: IS_DEV ? 'inline-source-map' : 'none',
    entry: entry,

    output: {
      path: nodePath.resolve(__dirname, `build/${name}`),
      publicPath: `/`,
      filename:
        IS_DEV
          ? `${STATIC_DIR}/scripts/[name].js`
          : `${STATIC_DIR}/scripts/[name].[contenthash].js`
    },


    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: ALIASES,
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
                hmr: IS_DEV ? true : false,
              }
            },
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                importLoaders: 2,
                sourceMap: IS_DEV ? true : false,
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

        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `[name].[ext]`,
                outputPath: `${STATIC_DIR}/fonts/`
              }
            }
          ]
        },

        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }

      ]
    },


    plugins: [
      new CleanWebpackPlugin(),

      ...Object.keys(entry).map(chunk => (
        new HtmlWebpackPlugin({
          template: INDEX_HTML,
          chunks: [chunk],
          filename: `${chunk}.html`
        })
      )),

      new MiniCssExtractPlugin({
        filename: IS_DEV
          ? `${STATIC_DIR}/styles/[name].css`
          : `${STATIC_DIR}/styles/[name].[contenthash].css`
        ,
      }),

      IS_DEV && new ReactRefreshWebpackPlugin({
        overlay: false
      }),

      IS_DEV && new FriendlyErrorsWebpackPlugin(),

      // !IS_DEV && new BundleAnalyzerPlugin({
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
      hints: IS_DEV ? false : 'warning',
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

      minimize: IS_DEV ? false : true,

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
      disableHostCheck: true,
    },

  }
}


function addStyleToEntry(entry, stylePath) {
  const newEntry = {}

  for (let key in entry) if (entry.hasOwnProperty(key)) {
    let entryItem = entry[key]
    if (!Array.isArray(entryItem)) {
      entryItem = [entryItem]
    }
    newEntry[key] = [stylePath, ...entryItem]
  }

  return newEntry
}


function getDirAliases(path) {
  const aliases = {}
  path = nodePath.resolve(__dirname, path)

  const dirNames = fs.readdirSync(path, {withFileTypes: true})
  .filter(dirEnt => dirEnt.isDirectory())
  .map(dirEnt => dirEnt.name)

  dirNames.forEach(dirName => {
    aliases[dirName] = nodePath.join(path, dirName)
  })

  return aliases
}

