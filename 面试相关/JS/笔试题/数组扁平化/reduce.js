const arr = [1, [2, 3], [4, [5]]]

function flatten(arr) {
  return arr.reduce((pre, next) => pre.concat(Array.isArray(next) ? flatten(next) : next), [])
}

const res = flatten(arr)
console.log(res)