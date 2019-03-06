const { isArr, swap } = require('./swap')

// 插入排序  时间复杂度O(n^2)
function selection(arr) {
  if (!isArr(arr)) return

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}

let arr = [2, 1, 3, 5, 4]
selection(arr)
console.log(arr);