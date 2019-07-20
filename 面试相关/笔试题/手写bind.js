Function.prototype.bind2 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('只能用函数调用')
  }
  var self = this

  function temp() { }

  var Con = function () {

    var arr = [].slice.call(arguments)
    if (this instanceof Con) {
      return self.call(this, ...args, ...arr)
    }
    return self.call(context, ...args, ...arr)
  }

  temp.prototype = this.prototype

  Con.prototype = new temp()

  return Con
}

var foo = {
  value: 'haohoa'
}

function bar(...args) {
  this.habit = 'ball'
  console.log(this.value)
  console.log(...args)
  return this.value
}

bar.prototype.name = 'haohao'

var fun = bar.bind2(foo, 1, 2)
// console.log(fun(1, 4));
var f = new fun(1, 4)
console.log(f);
console.log(f.name);
