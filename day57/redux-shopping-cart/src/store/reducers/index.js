import { combineReducers } from 'redux'
import productReducer from './productReducer'
import floatCartReducer from './floatCartReducer'
import updateCartReducer from './updateCartReducer'

// redux 设计
export default combineReducers({
  products: productReducer,
  cartProducts: floatCartReducer,
  cartTotal: updateCartReducer,
  // sort: sortReducer,
  // filters: filterReducer
})