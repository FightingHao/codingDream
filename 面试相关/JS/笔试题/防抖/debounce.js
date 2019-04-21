var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  // console.log(this);
  console.log(arguments);

  container.innerHTML = count++;
};

function debounce(func, wait) {
  var timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func.bind(this, arguments), wait)
  }
}

container.onmousemove = debounce(getUserAction, 100);