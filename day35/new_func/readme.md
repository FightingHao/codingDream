new 到底做了什么
let p = new Person()
p 是 Object类型， Person函数类型 typeof
1. Parent 被执行 加了new后 Parent函数会在new的作用域下执行 this指向p
  构造函数里的属性被当作p的属性被创建
2. p.__proto__指向 Person.prototype  p就继承了Parent.prototype中的属性和方法