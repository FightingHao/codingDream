const arr = [1, [2, 3], [4, [5]]]

function flatten(arr) {
  return arr.toString().split(',').map(item => +item)
}

const res = flatten(arr)
console.log(res)