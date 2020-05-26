const nib = require('nib')


module.exports = {
  presets: ['next/babel'],
  ignore: ["node_modules", "packages", ".next"],

  compact: true,

  plugins: [
    ['styled-jsx/babel', {
      plugins: [
        ['styled-jsx-plugin-stylus', {
          use: function (stylus) {
            return stylus
            .include(nib.path)
            .import('nib')
            .import('./config.styl')
          }
        }],
      ]
    }],

    'babel-plugin-graphql-tag'
  ]
}


