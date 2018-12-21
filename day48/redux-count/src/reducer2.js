const defaultState = 0
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    default:
      return state
  }
}

const state = reducer(1, {
  type: 'INCREMENT',
  payload: 2
})

console.log(state);

const actions = [
  {
    type: 'INCREMENT',
    payload: 0
  },
  {
    type: 'INCREMENT',
    payload: 1
  },
  {
    type: 'INCREMENT',
    payload: 2
  },
  {
    type: 'INCREMENT',
    payload: 3
  },
]

const total = actions.reduce(reducer, 0)

console.log(total);

