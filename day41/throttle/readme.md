Ajax Google Suggestion
猜出用户想搜索的内容
用户边输入(input) 边做建议(ajax 后端去返回list dom)
react onChange input
频繁的被触发 减少一些 不会影响效果
节流 在一段时间内只执行一次(300ms)
限制时间执行的方式， 防抖和节流

使用lodash _.throttle(fn, time)

onmousemove ontouchmove 频繁发生
throttle 在一定时间内只执行一次

1. 使用时间戳 + 闭包
2. 使用计时器
区别： 实现的方式， 体验的细节， 第一次执行的方式
  时间戳由于事先为0 previous now - previous > wait 先执行
  setTimeout timeout null 是在wait 到点时执行 后执行