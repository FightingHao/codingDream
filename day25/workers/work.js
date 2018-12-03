// 接收消息
self.addEventListener('message', function (e) {
  console.log(e)
  var data = e.data
  switch (data.cmd) {
    case 'start':
      self.postMessage('worker started:' + data.msg)
      break
    case 'stop':
      self.postMessage('worker stopped:' + data.msg)
      break

    default:
      break
  }
})