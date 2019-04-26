const { isArr, swap } = require('./swap')

// 插入排序  时间复杂度O(n^2)
function insertion(arr) {
  if (!isArr(arr)) return

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
  return arr
}

let arr = [2, 1, 3, 5, 4]
insertion(arr)
console.log(arr);