var arr1 = [1, 2]
// 可一个参数一个参数的传递
arr1.concat(3, 4)

// 不改变原数组
console.log(arr1) // [1, 2]

var arr2 = [1, 2]
// 可传递数组
var arr3 = arr2.concat([3, 4])
console.log(arr3) // [1, 2, 3, 4]