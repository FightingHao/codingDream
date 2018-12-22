import { createStore, combineReducer } from 'redux'
var reducer_0 = function (state = {}, action) {
  switch (action.type) {
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      }
    default:
      return state
  }
}

var userReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

var reducer = combineReducer({
  reducer_0: reducer_0,
  user: userReducer
})

var store = createStore(reducer)