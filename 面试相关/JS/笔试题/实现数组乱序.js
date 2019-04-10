function messArr(arr) {
  let sign = 1
  arr.sort((a, b) => {
    sign = Math.random() > 0.5 ? 1 : -1
    return sign * (a - b)
  })
  return arr
}

const arr = [1, 2, 3, 4, 5, 6]
const newArr =  messArr(arr)
console.log(newArr)