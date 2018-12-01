'use strict';

// 语法糖
/* class Person {
  // es6 constructor
  constructor() {
    this.name = name
  }
  sayHello() {
    return this.name
  }
  age = 1
} */

// es5 构造函数
function _classCallCheck(instance, constructor) {
  if (!(instance instanceof constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function Person(name) {
  _classCallCheck(this, Person);
  this.name = name;
}

Person.prototype = {
  sayHello: function sayHello() {
    return this.name;
  }

  // Person('hao')

};console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));

/* var lilei = new Person('lilei')
console.log(lilei)
var lilei2 = Person('lilei2')
console.log(lilei2)
console.log(this.name) */
