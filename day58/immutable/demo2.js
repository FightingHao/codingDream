var arr = ['old', 1, true, null, undefined]
// var new_arr = arr
// var new_arr = arr.concat()
var new_arr = arr.slice()
// slice concat 数组少数返回新数组的方法 浅拷贝
new_arr[0] = 'new'
console.log(new_arr, arr);

// 未来不可预知 new_arr arr 一方修改 不要用
// js bad parts
// Immutable 让未来可知
// reducer 纯函数