// 判断是否为数组，且数组不为空
function isArr(arr) {
  if(Array.isArray(arr)) {
    if(arr.length) {
      return true
    }
  }
  return false
}

// 交换函数
function swap(arr, left, right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

module.exports = {
  isArr,
  swap
}