1. 一切资源皆可打包 webpack bundle
  import logo from './logo.svg' 图片也可引入到js中 参与js 的运算

2. 路由接管一切 配置在最前面
  ```
  <Router>
    <Route path="" component="" />
  </Route>
  ```
  有两种路由
    - BrowserRouter 由最新h5 api history.pushState(state, title, url) 实现 (高级浏览器 mobile, url更好理解) 移动端
    - HashRouter 后者的兼容性好 IE8以上都兼容 可依赖 # + hashchange 实现 PC端