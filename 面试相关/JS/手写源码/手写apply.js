Function.prototype.apply1 = function (context, arr) {
  if (typeof this !== 'function') {
    throw new Error('只能用函数调用')
  }
  var glo = typeof window === 'object' ? window : global
  context.fn = this
  // var result = context.fn(...arr)
  var args = []
  for (var i = 0, len = arr.length; i < len; i++) {
    args.push('arr[' + i + ']');
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

var bar = {
  value: 'haohao',
  foo: function foo() {
    console.log(this.value)
  }
}

function foo(a, b) {
  console.log(this.value)
  console.log(a, b);
}

foo.apply1(bar, [1, 2])