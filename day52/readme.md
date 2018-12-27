- redux 让所有的状态共享 读可 写要遵守规则 这也是redux的基本规则
- 只有action可以修改state(执行相应的reducer)
- 组件只能dispatch一个action

- reducer 是不可以直接调用的 只有通过action调用
  组件帅哥 不能见面 reducer小姐 要通过dispatch 媒婆

- 要保护好数据 设置了 reducer 提供并且精确计算状态的函数
- 组件只有dispatch一个action 才能执行 