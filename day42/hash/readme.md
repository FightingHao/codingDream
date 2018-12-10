#hashtag 在当前页面切换 本页面不会刷新
单页应用
hashchange 事件 组件的动态加载
#hashtag => url 的一部分

- 传统的地址切换有以下问题
  1. 重度依赖于http协议
   当只有后端路由 当前页面需要卸载 会白屏一下 然后加载其它页面 重新生成html网页  新的页面新的dom渲染的过程
    会白一下 比较慢 影响体验

- 新时代的路由
  history api 或有hashtag 不会产生页面的跳转
  捕捉到事件 马上切出对用的组件

  http(s)?://www.baidu.com/path?querystring#/hello
  url hash部分变了 不会发生http请求 页面不会被刷新

- history API
  url 的访问， 都是浏览器的一个访问记录 就是数据结构的栈
  pushState(null, null, '#/hello') 入栈一个浏览历史
  pop
  给我们的的访问新增一个记录 但是不会刷新页面 得到一个prostate事件 页面组件的切换
  前端路由已经成熟， 可以hash 也可以path 切换 全部交给pushState