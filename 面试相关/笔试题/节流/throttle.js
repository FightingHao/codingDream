// 时间戳版本
function throttle(fn, time) {
  let lastTime = 0;
  return function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > time) {
      fn.call(this, arguments);
      lastTime = nowTime;
    }
  }
}

// 定时器版本
function throttle(fn, time) {
  let timeout = null;
  return function () {
    if (!timeout) {
      timeout = setTimeout(_ => {
        fn.call(this, arguments);
        timeout = null;
      }, time)
    }
  }
}
