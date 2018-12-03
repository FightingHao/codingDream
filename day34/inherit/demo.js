function Person() {
  this.name = 'kevin'
}

// Person 函数 js 本没有类， 只有对象
Person.prototype.getName = function () {
  return this.name
}

// new Person().getName()
// console.log(Object);

function Child() {

}

Child.prototype = new Person()
var child = new Child()

console.log(child.getName());

