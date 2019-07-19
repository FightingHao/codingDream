function test(input) {
  if (typeof input !== 'string')
    return false
  return input.split('').reverse().join('') === input
}

function test2(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.substr(i, 1) !== str.substr(str.length - i - 1, 1)) return false
  }
  return true
}

var demo1 = test2('12321')
console.log(demo1)
