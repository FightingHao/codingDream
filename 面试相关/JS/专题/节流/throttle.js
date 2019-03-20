function throttle(fn, time) {
  var lastTime = 0

  return function () {
    var nowTime = Date.now()

    if (nowTime - lastTime > time) {
      fn()
      lastTime = nowTime
    }
  }
}