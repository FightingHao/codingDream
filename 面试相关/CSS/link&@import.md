## 从属关系区别
  - `link`是HTML提供的标签，不仅可以加载CSS文件，还可以定义RSS、rel 连接属性等。
  - `@import`是CSS提供的语法

## 加载顺序区别
  - 加载页面时，`link`标签引入的CSS和页面同时加载
  - `@import`在页面加载完成后再加载

## 兼容性区别
  - `link`是HTML标签不存在兼容性问题
  - `@import`是CSS2.1后才有的语法，所以只有IE5+才能识别

## DOM可控性区别
  - `link`标签可通过JS操作DOM的形式来操纵
  - `@import`无法通过JS形式插入