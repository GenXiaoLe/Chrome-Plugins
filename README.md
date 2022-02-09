# Chrome-Plugins

## 基础
### manifest.json
> chrome基础文件，入口文件，里面包括扩展插件的一系列配置
- name: 插件名称
- description: 插件描述
- version: 插件版本，用于更新
- icons: 插件扩展包图标
- browser_action: 插件功能配置项
  - default_popup: 插件展示的默认文件
  - default_icon: 插件展示的icon
- permissions: 浏览器权限
- chrome_url_overrides: 浏览器默认页面
- web_accessible_resources: 访问js/css的路径配置


## 学习资料
- https://www.ituring.com.cn/book/1421[Chrome扩展及应用开发（首发版）]
