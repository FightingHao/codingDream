import { createStore, combineReducers, applyMiddleware } from 'redux'
import { users } from '../reducer/reducer'
import logger from 'redux-logger'

const store = createStore(
  combineReducers(users),
  applyMiddleware(logger)
)

export default store