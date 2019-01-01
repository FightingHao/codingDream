redux-context
redux 父子组件 父子组件传值很麻烦
context 按组件传值 react-redux 基于它实现全局状态
打破层次关系实现共享 redux ? redux太重了 context
redux新版本基于context的api实现

- context API redux 依靠它
  childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {store: {}}
  }

context 四步
- ChildContextTypes 顶层组件中规定类型
- getChildContext 顶层组件中设置数据
- 后代组件通过contextTypes 规定数据类型
- 后代组件this.context获取数据

全局的store 太烦了， 不是react 数据流的语法烦， context api 代码的重复
dry dont repeat yourself 生命周期 _setUp() contextTypes
connect react-redux HOC

- connect 封装， 有关的context的操作都交给他
- 后代组件 只需要做自己的事