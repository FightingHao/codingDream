1. 如果使用 new ，就报错
2. 如果 description 是 undefined，让 descString 为 undefined
3. 否则 让 descString 为 ToString(description)
4. 如果报错，就返回
5. 返回一个新的唯一的 Symbol 值，它的内部属性 [[Description]] 值为 descString

作者：冴羽
链接：https://juejin.im/post/5b1f4c21f265da6e0f70bb19
来源：掘金