> 引用《你不知道的JavaScript》的一段代码
```js
function foo() {
  var a  = arguments[0] !== (void 0 ) ? arguments[0] : 2;
  return a;
}
```
void 0 返回undefined，我们都知道的，但是为什么不直接 arguments[0] !== undefined?

## undefined 可以被重写
undefined 在 ES5 中已经是全局对象的一个只读（read-only）属性了，它不能被重写。但是在局部作用域中，还是可以被重写的。
所以，在实际编程时，我们一般不会把变量赋值为 undefined，这样可以保证所有值为 undefined 的变量，都是从未赋值的自然状态。
```js
(function() {
  var undefined = 1
  console.log(undefined) // 1
})()
```

## void 运算符可返回 undefined
> 引用 MDN 对 void 的定义：The void operator evaluates the given expression and then returns undefined.

void 运算符能对给定的表达式进行求值，然后返回 undefined。也就是说，void 后面你随便跟上一个表达式，返回的都是 undefined,
并且由于 `void` 是个运算符，也是 js 中的关键字，不能被单独操作，也就没有 undefined 一样被重写的问题了。
```js
void 1 // undefined
void 'hello' // undefined
```
但为什么是 `void 0` 呢，因为 `void 0` 是表达式中最短的。用 `void 0` 代替 `undefined` 能节省字节。不少 `JavaScript` 压缩工具在压缩过程中，正是将 `undefined` 用 `void 0` 代替掉了。