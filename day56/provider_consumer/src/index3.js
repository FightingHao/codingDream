import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'

const reducers = combineReducers({
  films: (state = [], action) => {
    let { type, payload } = action
    switch (type) {
      case 'GET_FILM_DATA':
        return payload

      default:
        return state
    }
  }
})

const store = createStore(reducers, applyMiddleware(ReduxThunk, ReduxLogger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)