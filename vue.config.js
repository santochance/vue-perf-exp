const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  chainWebpack: config => {
    // 添加 webpack bundle analyzer
    if (process.env.NODE_ENV === 'production' && process.env.ANALYZE === 'true') {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          // analyzerPort: 9999
        }])
    }
  }
}