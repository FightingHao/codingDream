function messArr(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('this arguments need a array')
  }
  
  arr.sort((a, b) => {
    return (0.5 - Math.random()) * (a - b)
  })
  return arr
}

const arr = [1, 2, 3, 4, 5, 6]
const newArr = messArr(arr)
console.log(newArr)