const path = require('path')
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist',
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  configureWebpack: config => {

  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'))
      .set('_p', resolve('src/assets/pic/'))

    /* // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      }) */

    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  devServer: {
    open: true, // 自动启动浏览器
    port: 8080, // 端口号
    https: false,
    hotOnly: false, // 热更新
    proxy: {
      // 本地代理包含api的接口 如： /api/getUser 
      '^/api': {
        //target: process.env.VUE_APP_SRC,
        target: 'http://localhost:3000',
        ws: true,   //开启WebSocket
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  //需要rewrite的,
        }
      },
      '^/bing': {
        target: 'https://open.saintic.com/api/',
        ws: true,   //开启WebSocket
        secure: true,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/bing': ''  //需要rewrite的,
        }
      }
    }
  }
}


