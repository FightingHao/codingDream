/*
  var t
  function foo() {
  t = t || +new Date()
  return t
} */

/* var foo = (function () {
  var t
  return function () {
    t = t || +new Date()
    return t
  }
})() */

/* function foo() {
  foo.t = foo.t || +new Date()
  return foo.t
} */

// 惰性函数
// 本质重新定义函数
var foo = function () {
  var t = +new Date()
  foo = function () {
    return t
  }

  return foo()
}


console.log(foo())
setTimeout(() => {
  console.log(foo())
}, 2000);

