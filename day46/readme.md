taro init redux_todolist
yarn add redux @tarojs/redux
<!-- 编译成小程序 -->
npm run dev:weapp

- 发布订阅者
  组件connect(state, action)(原组件) 成为一个高阶组件
  action 是修改状态的唯一方式 靠触发reducer函数的执行