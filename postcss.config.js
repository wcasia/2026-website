module.exports = {
  plugins: [
    require('postcss-import')({
      // Resolve imports relative to the style.css file
      path: ['.']
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    })
  ]
}

