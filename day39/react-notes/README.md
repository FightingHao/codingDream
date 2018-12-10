yarn add lodash moment lokijs
- moment(格式化时间的Npm包)
- lokijs性能优先的js数据库

组件的形式，容器组件和函数组件之分，未来有高阶组件
构建组件时 选择合适的方式
路由页面下的组件树 页面级别 形成单页应用
不同状态下，细分组件行为

1. JSX内有些逻辑比较复杂 update 时间戳 body 经过了计算一样 在vue里 有计算属性 react 组建方法

2. moment().fromNow()
  _.truncate(, 30)
  之前的state里的一个值， 计算成想要的形态

3. 编辑表单 toggle
  {this.state.open && <Editor />}