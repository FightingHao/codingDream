Array.prototype.myMap = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('参数不是函数')
  }

  return this.reduce((pre, cur, index) => {
    var res = fn(cur, index)
    pre.push(res)
    return pre
  }, [])
}