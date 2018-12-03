// new 实例化过程
// Otaku类 抽象概念 等待被new
function Otaku(name, age, a) {
  this.name = name
  this.age = age
  this.a = a
  this.habit = 'Games'
}

Otaku.prototype.strenth = 60
Otaku.prototype.sayYourName = function () {
  console.log('I am' + this.name)
}

/* var person = new Otaku('Kevin', 18)
console.log()
person.sayYourName() */

// new 是关键字
// 1. 返回一个实例{} 声明  拥有Otaku函数中的属性
// 2. 实例可以访问到Otaku.prototype中的属性

var f = {}
f[0] = 0
f[1] = 1
f.length = 3
f[2] = 2


function objectFactor() {
  var obj = new Object(),
    Constructor = [].shift.call(arguments)
  console.log(typeof arguments)
  Constructor.apply(obj, f)
  obj.__proto__ = Constructor.prototype
  return obj
}

// 1 构造函数 2 构造函数的参数
const obj = objectFactor(Otaku, 'hao', 18, 1)

console.log(obj);

