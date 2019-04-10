const obj = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null // 待会将指向obj.bar
      }
    }
  }
}

// obj.foo.bar.baz.aChild = obj.foo // foo->bar->baz->aChild->foo形成环

// const obj = {
//   a: {
//     c: 1
//   },
//   b: {
//     d: null // null 等下填充引用的地方
//   }
// }

// obj.b.d = obj.a

function cycleDetector(obj) {
  let
    hasCycle = false,
    valueArr = []

    ; (function (obj) {
      Object.values(obj).forEach(value => {
        if (Object.prototype.toString.call(value) === '[object Object]') {
          if (valueArr.indexOf(value) !== -1) {
            hasCycle = true
            return
          } else {
            valueArr.push(value)
            arguments.callee(value)
            if (!hasCycle) {
              valueArr.pop()
            }
          }
        }
      })
    })(obj)

  return hasCycle
}

const result = cycleDetector(obj)
console.log(result)

function cycleDetector2(obj) {
  let valueArr = []

  return (function (obj, valueArr) {
    if (Object.prototype.toString.call(obj) !== '[object Object]' || obj === null) return false
    if (valueArr.indexOf(obj) !== -1) return true

    valueArr = [...valueArr, obj]
    return Object.values(obj).some(value => arguments.callee(value, valueArr))
  })(obj, valueArr)
}

const result2 = cycleDetector2(obj)
console.log(result2)

// https://lensh.github.io/2017/08/25/alibaba/