self.addEventListener('message', (event) => {
  const data = event.data
  for (const item of data.pic) {
    // src img
    let xhr = new XMLHttpRequest()
    xhr.open('GET', item.src, true)
    xhr.responseType = 'blob'
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        self.postMessage({
          id: item.id,
          result: xhr.response
        })
      }
    }
    xhr.send()
  }
})