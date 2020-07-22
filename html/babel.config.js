module.exports = (api) => {

  const isDev = Boolean(process.env.WEBPACK_DEV_SERVER)
  api.cache.using(() => isDev)

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],

    plugins: [
      ["@babel/plugin-proposal-decorators", {
        "legacy": true
      }],

      ["@babel/plugin-proposal-class-properties"],

      ['babel-plugin-graphql-tag'],

      isDev && 'react-refresh/babel',

      ["auto-import", {
        declarations: [
          {
            path: "react",
            default: 'React',
            members: [
              'Component', 'Suspend',
              'useRef', 'useMemo', 'useState',
              'useEffect', 'useContext', 'useCallback', 'useLayoutEffect',
            ]
          }
        ]
      }]
    ]

    // filter boolean plugins
    .filter(plugin => 'boolean' !== typeof plugin)
  }

}
