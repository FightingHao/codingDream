var arr1 = [2, 5, 40, 25, 1000, 1]

// 不传参数按AsscII码值比较
var result = arr1.sort()

// 会改变原数组
console.log(arr1) // [1, 10, 1000, 25, 40, 5]

// 返回值是对数组的引用
console.log(result) // [1, 10, 1000, 25, 40, 5]

var arr2 = [10, 5, 40, 25, 1000, 1]

result = arr2.sort(function (a, b) {
  return a > b
})

console.log(arr2) // [ 1, 5, 10, 25, 40, 1000 ]

console.log(result) // [ 1, 5, 10, 25, 40, 1000 ]