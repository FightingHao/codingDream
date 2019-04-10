function add(a, b) {
  var result = '', c = 0

  a = a.toString().split('')
  b = b.toString().split('')

  // console.log(a, b);
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    result = c % 10 + result
    c = c > 9
  }

  if (result.length >= 21) {
    result = '100000000000000000000'
  }

  return result.replace(/^0+/, '')
}

var result = add('1111111111111111111111111111111111111', '1')
console.log(result)
