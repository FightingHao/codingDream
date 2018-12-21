create-react-app redux-count
yarn add redux

- 代码结构
  store
    状态仓库 共享和管理状态
      getState setState
  api

- 组件通信

统一状态树 Store 唯一的

1. store.getState() 读
2. store.dispatch(action)
  相应的reducer 得以计算 返回新的状态
  MVVM 更新 UI