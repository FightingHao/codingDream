var foo = {
  value: 1
}

var obj = {
  value: 2
}

function bar(name, age) {
  console.log(++this.value)
}

// 实际是形成一个闭包
var bindObj = bar.bind(foo)
console.log(typeof bindObj);
bindObj()


var bindFoo = bar.bind(foo)

bindFoo()  // 新生的函数可以异步执行