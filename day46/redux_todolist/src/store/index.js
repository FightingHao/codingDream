// createStore单例模式 只返回一颗状态树
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configStore() {
  const store = createStore(rootReducer)
  return store
}