var arr = [1, 2, 4, 5]

// 左开右闭
var result = arr.splice(1, 2, 1, 3)

console.log(result) // [2, 4]
console.log(arr) // 改变原数组 [1, 1, 3, 5]