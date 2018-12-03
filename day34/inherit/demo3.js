function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)  // super()
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
Child.prototype.sayHello = function () {
  console.log(this.name, this.age)
}
// console.log(new Child());

var child1 = new Child('hao', 18)
console.log(child1)
child1.sayHello()
console.log(Child.prototype.constructor);