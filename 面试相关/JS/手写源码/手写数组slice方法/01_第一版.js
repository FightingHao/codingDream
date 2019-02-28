Array.prototype.mySlice = function (...arg) {
  var start = 0 // 初始切割位
  var end = this.length // 终止切割位置
  var sliceArr = [] // 切割后数组
  console.log(arg);


  if (arg.length > 0) {
    if (arg[0] > start) {
      start = arg[0]
    }
    if (arg[1] < end) {
      end = arg[1]
    }
  }

  for (var i = start; i < end; i++) {
    sliceArr.push(this[i])
  }

  return sliceArr
};

var fakeObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

var arr = [].mySlice.call(fakeObj) //伪数组转数组
console.log(arr);

