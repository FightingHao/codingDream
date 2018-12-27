export const createStore = (state, storeChange) => {
  const store = state || {}
  const dispatch = action => storeChange(store, action)
  return { store, dispatch }
}