- 性能优化
  + script标签具有阻塞性
  + src下载代码 并执行 不要放在头部
  + 页面的显示， painting 绘制 排列 重绘重排
  + 生命周期 window.onload DOMContentLoaded
  + js 开始 不要阻止dom的绘制 但是也不要等到 window.onload

- $(callback)
  + jquery $是一种dom ready 事件
  + $(function(){})
  + $(selector) 用于选择元素
  + 动态页面 先显示页面 在取数据