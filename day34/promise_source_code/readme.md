手写Promise A+规范

js 回调 解决异步 出现了倒金字塔式的回调地狱
Promise A+ 规范
一个类， 构造函数 resolve reject
返回promise实例 then 方法

1. Promise 将executor 封装在构造函数内部
  并提供resolve reject 两个函数给executor到时回调

2. then 是同步的， 跟Promise 构造函数一样， 属于语法的一方面
  将onResolveFullfield onRejected 存储起来， 并与this绑定

3. executor 高阶函数 才是真正的主战场， 负责this.status this.reason this.value 的处理


p.then(onFulfilled, onRejected)

p
  .then('bar')  // 'bar' 不是函数，会在内部被替换为 (x) => x
  .then((value) => {
    console.log(value)
  })

onFulfilled
  当Promise变成接受状态（fulfillment）时，该参数作为回调函数被调用（参考： Function）。
  该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果传入的 onFulfilled 参数类型不是函数，
  则会在内部被替换为(x) => x ，即原样返回 promise 最终结果的函数。
onRejected
  当Promise变成拒绝状态（rejection ）时，该参数作为回调函数被调用（参考： Function）。
  该函数有一个参数,，即拒绝的原因（the rejection reason）。