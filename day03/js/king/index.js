const chior = []

var duck = {
  duckSing() {
    console.log('ggg')
  }
}


var chicken = {
  chickenSing() {
    console.log('lololo');
  }
}

chicken.duckSing = function () {
  console.log('ggg')
}
/* for (let i = 0; i < 999; i++) {
  if (typeof duck.duckSing === 'function') {
    chior.push(duck)
  }
} */
//136 0922 6000 2170
function joinChior(animal) {
  if (animal && typeof animal.duckSing === 'function') {
    chior.push(animal)
  } else {
    console.log('不符合要求')
  }
}

for (let i = 0; i < 999; i++) {
  joinChior(duck)
}

console.log('第' + chior.length + '只动物');

joinChior(chicken)

console.log('第' + chior.length + '只动物');