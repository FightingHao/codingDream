1. Symbol.iterator 改造 for...of 在对象中的行为
```js
function createIterator(obj) {
  let arr = Object.entries(obj) // [['a', 1], ['b', 2]]
  let i = 0
  return {
    next() {
      let value = arr[i++]
      let done = i > arr.length
      return {
        value,
        done
      }
    }
  }
}

Object.prototype[Symbol.iterator] = function() {
  return createIterator(this)
}

const obj = {
  a: 1,
  b: 2
}

for(const [key, value] of obj) {
  console.log(key, value)
}

```

2. 手动模拟实现 `for-of`
```js
function forof(arr, cb) {
  const iterator = Array.prototype[Symbol.iterator]()
  const result = iterator.next()
  while (!result.done) {
    cb(result.value)
  }
}

const arr = [1, 2, 3]

forof(arr, item => console.log(item))
```