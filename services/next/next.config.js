const {PHASE_PRODUCTION_SERVER} = require('next/constants')
const nodePath = require('path')


const productionConfig = {
  devIndicators: {
    buildActivity: true,
    autoPrerender: false,
  },

  distDir: '.build',
  poweredByHeader: false,

  experimental: {
    granularChunks: true,
    modern: true,
    reactRefresh: true,
  },
}


module.exports = function (phase, defaultConfig) {

  if (phase === PHASE_PRODUCTION_SERVER) {
    return productionConfig
  }

  const optimizedImages = require('next-optimized-images')
  const withProgressBar = require('next-progressbar')
  const withPlugins = require('next-compose-plugins')
  const withFonts = require('next-fonts')

  return withPlugins([
    [optimizedImages, {}],
    [withProgressBar, {}],
    [withFonts, {}],
  ], {
    ...productionConfig,

    webpack(config, options) {
      addPreact(config, options)
      addAliases(config)
      addSvgLoader(config)
      addStylusLoader(config, options)
      setQuietLog(config)
      addDefinePlugin(config, options)
      excludeServerDirFromClient(config, options)
      addBundleAnalyzer(config, options)
      excludePackagesDir(config)
      return config
    },

  })(...arguments)


// const targets = ['server', 'serverless', 'experimental-serverless-trace']
// const reactModes = ['legacy', 'blocking', 'concurrent']
//
// const defaultConfig = {
//   env: [],
//   webpack: null,
//   webpackDevMiddleware: null,
//   distDir: '.next',
//   assetPrefix: '',
//   configOrigin: 'default',
//   useFileSystemPublicRoutes: true,
//   generateBuildId: () => null,
//   pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
//   target: 'server',
//   compress: true,
//   devIndicators: {
//     buildActivity: true,
//     autoPrerender: true,
//   },
//   onDemandEntries: {
//     maxInactiveAge: 60 * 1000,
//     pagesBufferLength: 2,
//   },
//   amp: {
//     canonicalBase: '',
//   },
//   exportTrailingSlash: false,
//   experimental: {
//     granularChunks: true,
//     modern: false,
//     plugins: false,
//     profiling: false,
//     sprFlushToDisk: true,
//     reactMode: 'legacy',
//     workerThreads: false,
//     basePath: '',
//     sassOptions: {},
//     pageEnv: true,
//     measureFid: false,
//     reactRefresh: false,
//   },
//   future: {
//     excludeDefaultMomentLocales: false,
//   },
//   serverRuntimeConfig: {},
//   publicRuntimeConfig: {},
//   reactStrictMode: false,
// }
}

function addPreact(config, {dev}) {
  if (!dev) {
    config.resolve.alias['react'] = 'preact/compat'
    config.resolve.alias['react-dom'] = 'preact/compat'
  }
}


function addAliases(config) {
  config.resolve.alias['res'] = nodePath.resolve(__dirname, './res')
}


function addSvgLoader(config) {
  let rule = config.module.rules.find(rule => {
    if (!rule.test) return false
    return rule.test.toString() === "/\\.(jpe?g|png|svg|gif)$/i"
  })

  rule.test = /\.(jpe?g|png|gif)$/i

  let lastSubRule = rule.oneOf[rule.oneOf.length - 1]
  let imgLoaders = lastSubRule.use.slice(0)

  config.module.rules.push({
    test: /\.svg(\?.*)?$/,
    use: [
      ...imgLoaders,
      {loader: 'svg-transform-loader'}
    ]
  })
}


function addStylusLoader(config, {defaultLoaders}) {
  // config.module.rules.push({
  //   test: /\.(styl)$/,
  //   use: ['raw-loader']
  // })

  config.module.rules.push({
    test: /\.(css|styl)$/,
    use: [
      defaultLoaders.babel,
      {
        loader: require('styled-jsx/webpack').loader,
        options: {
          type: 'scoped'
        }
      }
    ]
  })

}

function setQuietLog(config) {
  config.stats = 'none'

  config.devServer = {
    stats: 'none',
    noInfo: true
  }
}


function excludeServerDirFromClient(config, {isServer}) {
  if (!isServer) {
    config.externals = [...config.externals, excludeDir('./server')]
  }
}


function excludeDir(excludedDirs = []) {

  if (typeof excludedDirs === 'string') {
    excludedDirs = [excludedDirs]
  }

  const fileInDir = (filePath, dirPath) => {
    if (dirPath === filePath) return true
    const relative = nodePath.relative(dirPath, filePath)
    return relative && !relative.startsWith('..') && !nodePath.isAbsolute(relative)
  }

  return (context, request, callback) => {
    const filePath = nodePath.resolve(context, request)

    const fileInExcludedDir = excludedDirs.some(excludedDir => {
      return fileInDir(filePath, excludedDir)
    })

    if (fileInExcludedDir) {
      return callback(null, `commonjs ${ request }`)
    }

    callback()
  }
}


function addBundleAnalyzer(config, {dev, isServer}) {
  if (!dev && !isServer) {
    // const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
    // config.plugins.push(new BundleAnalyzerPlugin())
  }
}


function addDefinePlugin(config, {isServer, webpack}) {
  // config.plugins.push(new webpack.DefinePlugin({
  // IS_SERVER: JSON.stringify(Boolean(isServer)),
  // IS_BROWSER: JSON.stringify(!Boolean(isServer)),
  // 'LOL': '507',
  // }))
}


function excludePackagesDir(config) {
  const rule = config.module.rules[0]
  const originalExclude = rule.exclude
  rule.exclude = (path) => {
    if (/packages/.test(path)) {
      return true
    }
    return originalExclude(path)
  }
}
