## DOM0
  - 一是在标签内写onclick事件
  - 二是在JS写onclick=function（）{}函数
  - 在ｄｏｍ０级事件处理中，后定义的事件处理会覆盖前面的

## DOM1
  为什么没有DOM1？
  - DOM级别1于1998年10月1日成为W3C推荐标准。1级DOM标准中并没有定义事件相关的内容，所以没有所谓的1级DOM事件模型

## DOM2
  addEventListener 它有三个参数
  - 第一个参数是事件名（如click）
  - 第二个参数是事件处理程序函数
  - 第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用

  事件冒泡
    - div -> body -> html -> document 从下到上冒泡
  事件捕获
    - document -> html -> body -> div 从上到下捕获
  DOM事件流(IE9+)
    事件捕获阶段 -> 处于目标阶段(事件触发) -> 事件冒泡阶段