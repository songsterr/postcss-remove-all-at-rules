module.exports = () => {
  return {
    postcssPlugin: 'postcss-remove-at-rules',
    AtRule (atrule) {
      atrule.remove()
    }
  }
}

module.exports.postcss = true
