var shallowCopy = function (obj) {
  // 递归退出判断
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

var arr = ['old', 1, true, [2, 3]];
var new_arr = shallowCopy(arr);
new_arr[3][0] = 4;
console.log(new_arr, arr);
