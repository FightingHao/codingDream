var arr = [1, 2, 4, 5]
var result = arr.find(function (item, index, arr) {
  return item > 2
})

// 不改变原数组
console.log(arr) // [1, 2, 4, 5]

console.log(result) // 4