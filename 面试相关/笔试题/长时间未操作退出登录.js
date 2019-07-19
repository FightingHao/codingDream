// JS实现Web页面一段时间没有操作，退出或关闭页面
// 方案1
// 设置cookie session 过期时间

// 方案2
// js设置一个倒计时变量，当监听到keydown、mousemove、mousedown等事件时，重置倒计时；若倒计时变量走到0时，触发相应事件。
var maxTime = 60 * 30
var time = maxTime

$('body').on('keydown mousemove mousedown', function (e) {
  time = maxTime
})

var timeId = setInterval(() => {
  time--
  if (time <= 0) {
    logOut()
    clearInterval(timeId)
  }
}, 1000)

function logout() {
  // ...
  window.location.href = 'login.html'
}