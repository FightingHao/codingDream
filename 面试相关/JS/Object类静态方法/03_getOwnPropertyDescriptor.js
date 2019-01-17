let o = { get foo() { return 17; } };
let d = Object.getOwnPropertyDescriptor(o, "foo");

let o1 = { bar: 42 };
let d1 = Object.getOwnPropertyDescriptor(o1, "bar");

let o2 = {};
Object.defineProperty(o2, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
let d2 = Object.getOwnPropertyDescriptor(o2, "baz");
console.log(d)// {configurable: true, enumerable: true, get: [Function: get foo],set: undefined}
console.log(d1)//{configurable: true, enumerable: true, value: 42, writable: true}
console.log(d2)// {value: 8675309, writable: false, enumerable: false, configurable: false}
