import { ADD, DELETE } from '../constants/todos'

export const add = (data) => {
  return {
    data,
    type: ADD
  }
}

export const del = (id) => {
  console.log('actions del')

  return {
    id,
    type: DELETE
  }
}
