function New() {
  var Constructor = [].shift.call(arguments)
  var obj = {}

  if (typeof Constructor !== 'function') {
    throw new Error('传参错误！')
  }

  obj.__proto__ = Constructor.prototype
  var ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
  return {
    sex: 1,
    hobby: '1a'
  }
}

Person.prototype.high = 180
Person.prototype.sayName = function () {
  console.log(this.name)
}

var zhh = New(Person, 'hao', 18)
console.log(zhh)
console.log(zhh instanceof Person)