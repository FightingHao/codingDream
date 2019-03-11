Function.prototype.call2 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('只能用函数调用')
  }
  var glo = typeof window === 'object' ? window : global
  context = context || glo
  context.fn = this
  var result = context.fn(...args)
  delete context.fn
  return result
}

function bar(a, b) {
  console.log(this)
  console.log(a, b)
  return {
    value: this.value,
    a,
    b
  }
}

var foo = {
  value: 1
}

console.log(bar.call2(foo, 1, 'hello'));