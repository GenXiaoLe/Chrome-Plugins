module.exports = {
  pages: {
    // 入口页面
    index: {
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      title: '首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 浏览器自定义主页
    newtbas: {
      entry: 'src/pages/newtab/main.js',
      template: 'public/newtab.html',
      title: 'newtab',
      filename: 'newtab.html'
    }
  }
}