var str = 'hello'

var result = str.charAt(1)

// 不改变原数组
console.log(str) // hello

console.log(result) // e

result = str.charAt(-1)

console.log(result) // 下标不存在 输出空串 ''

// charCodeAt 返回在指定的位置的字符的 Unicode 编码