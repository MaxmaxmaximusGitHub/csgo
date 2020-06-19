const gulp = require('gulp')
const nodePath = require('path')
const webpack = require('webpack')
const child_process = require('child_process')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const MAIN = './index.js'

const serverWebpackConfig = {
  target: "node",
  mode: "production",

  externals: [nodeExternals()],

  devtool: "source-map",
  entry: MAIN,
  output: {
    path: nodePath.resolve(__dirname, './.build/'),
    filename: 'index.js'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
}


async function devServer() {
  let childProcess = null

  webpack({
    ...serverWebpackConfig,
    watch: true,
    mode: 'development',
  }, (err) => {

    if (childProcess) {
      childProcess.kill('SIGINT')
    }

    if (err) {
      console.error(err)
      return
    }

    childProcess = child_process.spawn('node', [
      `--inspect=0.0.0.0:${process.env.DEBUG_PORT}`,
      '--trace-warnings', '.'
    ], {
      shell: true,
      stdio: "inherit",
      env: {
        ...process.env,
        NODE_ENV: 'development'
      },
    })
  })
}


async function buildServer(done) {
  webpack(serverWebpackConfig, done)
}


gulp.task('dev', devServer)
gulp.task('build', buildServer)




