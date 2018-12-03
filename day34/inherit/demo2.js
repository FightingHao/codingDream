function Person(name) {
  this.names = ['kevin', 'daisy']
}
// this 永远很函数运行的方式有关
function Child() {
  Person.call(this)
}

console.log(new Child());

var c1 = new Child()
c1.names.push('hao')
console.log(c1.names);
var c2 = new Child()
console.log(c2.names);
console.log(c1.__proto__);
console.log(Person.prototype);


