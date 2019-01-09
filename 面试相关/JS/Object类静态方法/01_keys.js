// 定义一个 Array 对象
let arr = ["a", "b", "c"]

// 定义一个 Object 对象
let obj = { foo: "bar", baz: 42 }
obj.__proto__.a = 1

// 定义一个  类数组 对象
let ArrayLike = { 0: "a", 1: "b", 2: "c" }

// 类数组 对象, 随机 key 排序
let anObj = { 100: 'a', 2: 'b', 7: 'c' }

/* getFoo 是个不可枚举的属性 */
var my_obj = Object.create({}, {
  getFoo: { value: function () { return this.foo } }
}
);
my_obj.foo = 1

// 打印结果
console.log(Object.keys(arr));       // ['0', '1', '2']
console.log(Object.keys(obj));       // ["foo","baz"]
console.log(Object.keys(ArrayLike));     // ['0', '1', '2']
console.log(Object.keys(anObj));   // ['2', '7', '100']
console.log(Object.keys(my_obj)); // ['foo']

for (const o in obj) {
  console.log(o); // 'foo' 'baz' 'a'
}

console.log(arr instanceof Object); // true
