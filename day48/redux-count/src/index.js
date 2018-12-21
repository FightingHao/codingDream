import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
// 状态的生产者
import counter from './reducers'
import Counter from './components/Counter'

// 单独管理状态的地方
// 状态与UI统一 状态计算器
const store = createStore(counter)
const rootEl = document.getElementById('root')
console.log(createStore);
console.log(store);


const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={
      // 委派动作 重新计算状态
      () => store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement={
      () => store.dispatch({
        type: 'DECREMENT'
      })
    }
  />,
  rootEl
)

render()
// render订阅者 store发布者 订阅发布者模式
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
