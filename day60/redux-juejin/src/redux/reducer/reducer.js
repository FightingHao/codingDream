import Immutable from 'immutable'
import { REGISTER_USER } from '../action/users'

const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false
})

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return state.merge({
        newUser: action.data,
        saveSuccess: false,
        error: null
      })
    default:
      return state
  }
}