module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    "presets": [
      "@babel/preset-env", "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      "react-hot-loader/babel",

      // Stage 2 https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
      ["@babel/plugin-proposal-decorators", {"legacy": true}],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",

      // Stage 3
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", {"loose": true}],
      "@babel/plugin-proposal-json-strings",
      !api.env("production") && "react-refresh/babel"
    ].filter(Boolean)
  }
}