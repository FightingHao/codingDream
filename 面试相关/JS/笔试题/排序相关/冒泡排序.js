const { isArr, swap } = require('./swap')

// 冒泡排序  时间复杂度O(n^2)
function bubble(arr) {
  if (!isArr(arr)) return

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

let arr = [2, 1, 3, 5, 4]
bubble(arr)
console.log(arr);