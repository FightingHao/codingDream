function Parent(name) {
  this.name = name
}

var a = new Function()

let p = new Parent('张三')
console.log(Parent.__proto__)

console.log(a);

