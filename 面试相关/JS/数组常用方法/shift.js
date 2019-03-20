var arr1 = [1, 2, 4]
var result = arr1.shift()

console.log(result) // 1

// 改变原数组
console.log(arr1) // [2, 4]


var arr2 = []
result = arr2.shift()

console.log(result) // 数组为空返回undefined

console.log(arr2) // []