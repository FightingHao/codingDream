Function.prototype.bind2 = function (context) {
  var self = this
  // console.log(this);
  console.log(arguments)
  var args = Array.prototype.slice.call(arguments, 1)
  console.log(arguments)
  console.log(args)

  // console.log('bind2')
  return function () {
    console.log(arguments)

    var bindArgs = Array.prototype.slice.call(arguments)
    console.log(bindArgs);
    console.log(args.concat(bindArgs));
    

    self.apply(context, args.concat(bindArgs))
  }
}

var obj = {
  value: 1
}

const foo = function (name, age) {
  // console.log(this.value)
  // console.log(name)
  // console.log(age)
}

var f = foo.bind2(obj, 'hao')
f(18)