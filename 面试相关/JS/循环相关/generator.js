function* gen() {
  yield 1
  yield 2
  // return 后面 yield 不起作用
  // return
  yield* gen2()
  yield 3
  yield 4
}

function* gen2() {
  yield 5
  yield 6
}

const res = gen()
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())