// 函数序列化不了
var arr = [function () {
  console.log(a)
}, {
  b: function () {
    console.log(b)
  }
}]

var new_arr = JSON.parse(JSON.stringify(arr))
console.log(arr, new_arr)
// JSON两个方法， 对非函数子元素， 可进行深拷贝 性能开销比浅拷贝略大