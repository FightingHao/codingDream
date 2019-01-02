// api async data 都由action来处理
import { FETCH_PRODUCTS } from './types'
import axios from 'axios'

const productsAPI = 'https://react-shopping-cart-67954.firebaseio.com/products.json'

// export const fetchProducts = () => {
//   // action异步写法返回函数 同步返回对象
//   return (dispatch) => {

//   }
// }

export const fetchProducts = () => dispatch => {
  axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    })
    .catch(err => {
      console.log(err)
      throw new Error('try again later.')
    })
}