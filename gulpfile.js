const gulp = require('gulp')
const nodePath = require('path')
const {default: buildNext} = require('next/dist/build')
const webpack = require('webpack')
const del = require('del')
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const child_process = require('child_process')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')


const serverWebpackConfig = {
  target: "node",
  mode: "production",

  externals: [nodeExternals({
    whitelist: ['react', 'react-dom']
  })],

  devtool: "source-map",
  entry: "./server/index.js",
  output: {
    path: nodePath.resolve(__dirname, './build/server'),
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
      '--inspect', '--trace-warnings', './build/server',
    ], {
      // stdio: [process.stdin, process.stdout, process.stderr],
      env: {NODE_ENV: 'development'},
    })
  })
}

function devNext() {
  child_process.exec('next .', {
    // stdio: [process.stdin, process.stdout, process.stderr],
    env: {
      NODE_ENV: 'development',
    },
  })
  return new Promise(()=>{})
}


async function buildServer(done) {
  webpack(serverWebpackConfig, done)
}


async function buildNextServer() {
  await buildNext(__dirname)
}


async function clearDirs() {
  await del(['build'])
}


gulp.task('dev', gulp.parallel(
  devServer,
  devNext,
))


gulp.task('build', gulp.series(
  clearDirs,
  gulp.parallel(
    buildServer,
    buildNextServer,
  )
))




