import React from 'react'
import ReactDOM from 'react-dom'
// reudx只负责做这两件事
import { createStore, combineReducers } from 'redux'
// connect HOC(高阶组件)
import { Provider, connect } from 'react-redux'

// ----------------------------------------------------------
// actionTypes 常量 声明动作的类型 统一查看管理及修改
const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT'
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY'
// ----------------------------------------------------------

// ----------------------------------------------------------
// state 的get函数 可以对state进行返回 或者追加修饰
// state 代表着那棵状态树 多个reducer有多个分支 命名空间
const getVisibility = state => state.visible
const getCounterValue = state => state.counter.value
// ----------------------------------------------------------

// 初始化状态
const initialState = {
  visible: true,
  counter: {
    value: 0
  }
}

// ----------------------------------------------------------
// reducer 多个 由combineReducers 合并
// 将应用的state设计模块化
const counterReducer = (state = { value: initialState.counter }, action) => {
  if (action.type === ADD) {
    return { value: state.value + 1 }
  } else if (action.type === SUBTRACT) {
    return { value: state.value - 1 }
  }
  return state
}

const visibilityReducer = (state = initialState.visible, action) => {
  if (action.type == CHANGE_VISIBILITY) {
    return action.visible
  }
  return state
}
// ----------------------------------------------------------

// 动作函数
const add = () => ({ type: ADD })
const subtract = () => ({ type: SUBTRACT })
const changeVisibility = (visible) => ({
  type: CHANGE_VISIBILITY,
  visible
})

// redux 核心 不管层级 想redux发出请求
const App = ({ visible }) => (
  <div>
    <VisibilityConnected />
    {visible && <CounterConnected />}
  </div>
)

// ----------------------------------------------------------
// HOC
const CounterConnected = connect(
  state => ({
    value: getCounterValue(state)
  }),
  dispatch => ({
    // 会return 动作对象
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract())
  })
)(Counter)

const AppConnected = connect(
  state => ({
    visible: getVisibility(state)
  })
)(App)

const Visibility = ({ changeVisibility }) => (
  <div>
    <button onClick={() => changeVisibility(true)}>Visible</button>
    <button onClick={() => changeVisibility(false)}>Hidden</button>
  </div>
)
const VisibilityConnected = connect(
  null,
  dispatch => ({
    changeVisibility: value => dispatch(changeVisibility(value))
  })
)(Visibility)
// ----------------------------------------------------------

// redux 架构影响了组件的设计为 函数表现型组件 + connect 设计了state dispatch 的高阶容器型组件
function Counter({ value, add, subtract }) {
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
})

const store = createStore(rootReducer, initialState)
// const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root')
)
