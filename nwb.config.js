module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'makiru',
      externals: {
        react: 'React'
      }
    }
  }
}
