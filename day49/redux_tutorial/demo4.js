import { createStore, combineReducer, combineReducers } from 'redux'
var userReducer = function (state = {}, action) {
  console.log('userReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'SET_NAME':
      return {
        state,
        name: action.name
      }
    default:
      return state;
  }
}
var itemsReducer = function (state = [], action) {
  console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'ADD_ITEM':
      return [
        state,
        action.item
      ]
    default:
      return state;
  }
  
}

var store = createStore(combineReducers({
  user: userReducer,
  items: itemsReducer
}))

store.dispatch({type: 'ADD_ITEM', item: 'someone'})

