var arr = [{ old: 'old' }, ['old']]
// new_arr = arr.slice()
// stringify类型都改变了
var new_arr = JSON.parse(JSON.stringify(arr))
new_arr[0].old = 'new'
new_arr[1][0] = 'new'

// 深浅自知， 浅拷贝有他的应用场景， 更高效
console.log(arr, new_arr)
