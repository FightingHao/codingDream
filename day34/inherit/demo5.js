function Person(name) {
  this.name = name
}

let p = new Person('张三')
console.log(typeof p.__proto__);
console.log(Person.prototype.constructor === Person);
console.log(Person.__proto__ instanceof Function);
console.log(p.__proto__);

console.log(typeof new Function())