const {
  override,
  addBabelPlugins,
} = require("customize-cra")

module.exports = override(
  ...addBabelPlugins(
    'styled-jsx/babel'
  )
)