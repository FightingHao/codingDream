let count = 1
const container = document.getElementById('container')

function getUserAction() {
  container.innerHTML = count++
}

container.onmousemove = debounce(getUserAction, 1000)

function debounce(fn, wait) {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}