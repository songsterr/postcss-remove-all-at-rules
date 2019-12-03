let postcss = require('postcss')

// eslint-disable-next-line no-unused-vars
module.exports = postcss.plugin('postcss-remove-at-rules', (opts = { }) => {
  // eslint-disable-next-line no-unused-vars
  return (root, result) => {
    root.walkAtRules(atrule => {
      atrule.remove()
    })
  }
})
