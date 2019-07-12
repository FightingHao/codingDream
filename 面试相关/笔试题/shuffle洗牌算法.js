function shuffle(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('this arguments need a array')
  }

  var
    len = arr.length,
    randomIndex

  while (len) {
    randomIndex = Math.floor(Math.random() * (len--))
    ;[arr[len], arr[randomIndex]] = [arr[randomIndex], arr[len]]
  }

  return arr
}

const arr = [1, 2, 3, 4, 5, 6]
const newArr = shuffle(arr)
console.log(newArr)