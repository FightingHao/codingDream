var data = []

for (var i = 0; i < 3; i++) {
  (data[i] = function () {
    console.log(arguments.callee.i)
  }).i = i
}

data[0]()
data[1]()
data[2]()