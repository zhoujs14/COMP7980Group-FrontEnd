module.exports = {
  publicPath: './',
  outputDir: "dist",
  assetsDir: "static",
  indexPath: 'index.html',
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      '^/api/.*': {
        // 目标 API 地址
        target: 'http://localhost:3000', // 接口的域名
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    }
  }
}