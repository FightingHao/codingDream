// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
// for of遍历的只是数组内的元素，而不包括数组的原型属性

// 遍历数组
var arr = [1, 2, 3]
Array.prototype.test = 'test'
for (const i of arr) {
  console.log(i, arr[i], typeof i)
}