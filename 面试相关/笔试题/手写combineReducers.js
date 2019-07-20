function counter(state = 0, action) {
  return state
}

function counter2(state = 1, action) {
  return state
}

const reducers = { counter, counter2 }

let finalState = {}

function combineReducers(reducers) {
  if (Object.prototype.toString.call(reducers) !== '[object Object]') {
    throw new Error('传参错误')
  }

  function reducer(state, action) {
    for (key in reducers) {
      finalState[key] = reducers[key](state, action)
    }
    return finalState
  }

  return reducer
}

const newState = combineReducers(reducers)()
console.log(newState)