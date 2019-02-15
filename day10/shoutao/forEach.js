// 手写forEach代码
Array.prototype.forEach = function (fn) {
  if (typeof fn != 'function') {
    throw new Error('参数必须为函数')
  }

  if (!Array.isArray(this)) {
    throw new Error('必须用数组调用该方法')
  }
  for (let index = 0; index < this.length; index++) {
    // 执行回调函数
    fn(this[index], index, this)
  }
}


const arr = new Array(1, 2, 3)
var a = [1, 2, 3, 4]
a.forEach(function (item, index, array) {
  console.log(item, index, array)
})