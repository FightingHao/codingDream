export const createStore = (state, storeChange) => {
  let store = state || {}
  const listener = []

  // 状态是发布者 listener是订阅者
  const subscribe = (listen) => listener.push(listen)

  const dispatch = (action) => {
    const newStore = storeChange(store, action)
    store = newStore
    listener.forEach(item => item())
  }

  const getStore = () => {
    return store
  }

  return { store, dispatch, subscribe, getStore }
}