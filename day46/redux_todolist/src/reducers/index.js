import { combineReducers } from 'redux'
import { ADD, DELETE } from '../constants/todos'
// 用日历举例
const INITIAL_STATE = {
  todos: [
    { id: 0, text: '第一条todo' }
  ]
}
function todos(state = INITIAL_STATE, action) {
  let todoNum = state.todos.length
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: state.todos.concat({
          id: todoNum,
          text: action.data
        })
      }
    case DELETE:
      console.log('reducer del')
      let newTodos = state.todos.filter(item => {
        return item.id !== action.id
      })
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}
// combineReducers统一打包reducers 到单一状态树中
export default combineReducers({
  todos
})

// export default todos