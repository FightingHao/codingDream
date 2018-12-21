// 提供可以被action计算的状态
// 视图与状态是一一对应的
// 所有的状态保存再一个对象中， state
// 一蹴而就 reducer 函数 单纯的就负责提供状态
// state = 0 初始值 变化action
// 生命周期里请求了数据 用户进行了操作 action
// UI状态的千变万化 对应state的状态值 用完就丢
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}