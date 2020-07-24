const gulp = require('gulp')
const nodePath = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const child_process = require('child_process')


const webpackConfig = {
  target: "node",
  devtool: "source-map",

  node: {
    __dirname: false,
    __filename: false,
  },

  entry: './src/index.js',

  output: {
    path: nodePath.resolve(__dirname, './build/'),
    filename: 'index.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ]
}


async function dev() {
  var childProcess = null

  webpack({
    ...webpackConfig,
    watch: true,
    mode: 'development',
  }, (err) => {

    if (childProcess) {
      childProcess.kill('SIGINT')
    }

    childProcess = child_process.spawn(
      `node --inspect=0.0.0.0:${process.env.API_DEBUG_PORT} ./build/index.js`, {
        shell: true,
        stdio: [process.stdin, process.stdout, process.stderr],
      }
    )

  })
}


function build(done) {
  webpack({
    ...webpackConfig,
    mode: "production"
  }, done)
}


gulp.task('dev', dev)
gulp.task('build', build)




