yarn add react-router-dom prop-types

路由
按url 分发组件(Page级别组件)
根路由App
  -> path '/' 页面A级别组件(PageA) -> (容器组件Container -> 函数式组件(Present))
  -> path '/about' 页面B级别组件(PageB) -> (容器组件Container -> 函数式组件(Present))

- Link
  a太弱了 所以我们react-router 给了我们Link组件
  to href params ... 满足单页应用需要的一切

- h5上的history api 更新url 页面不用刷新
- ref react 里的id 利用它找到JSX的片段
  React.createRef() 返回一个不重复的id
  this.searchRef.current
- context 和 component lifecycle state类似 事件 函数式组件
  this.context.router.history.push('/search/:')