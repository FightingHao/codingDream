var str = 'hello'

// 第二个参数表示从哪开始查找
var result = str.indexOf('l', 1)

// 不改变原数组
console.log(str) // hello

// 返回第一个匹配的下标
console.log(result) // 2

// lastIndexOf 从后往前