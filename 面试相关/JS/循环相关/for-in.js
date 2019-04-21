// for in遍历数组的毛病
// 1. index索引为字符串型数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序
// 3. 使用for in会遍历数组所有的可枚举属性，包括原型。
// 所以for in更适合遍历对象，不要使用for in遍历数组。

// 遍历数组
var arr = [1, 2, 3]
Array.prototype.test = 'test'
for (const i in arr) {
  console.log(arr[i], typeof i)
}