* 生成器函数 封装着异步顺序执行的代码
yield 停下来 右边为promise 左边为待resolve之后的data
生成器函数调用得到生成器 dataGen = steps()
next 一下 可被迭代
{value: 上次迭代的data, done: false}
Iterator