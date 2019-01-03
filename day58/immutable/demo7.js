var deepCopy = function (obj) {
  // 递归退出判断
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    console.log(typeof obj[key]);
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }

  return newObj;
}

var arr = ['old', 1, true, [2, 3], function() {

}];
var new_arr = deepCopy(arr);
new_arr[4] = 4;
console.log(new_arr, arr);
