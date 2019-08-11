> 为什么用 Object.prototype.toString.call(obj) 检测对象类型?

JS 中每一类装箱对象均有私有的 `[[Class]]` 属性，这些属性可以使用 `Object.prototype.toString`来获取
```js
console.log(Object.prototype.toString.call("jerry"));//[object String]
console.log(Object.prototype.toString.call(12));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));//[object Object]
```

> 为什么不直接用 `obj.toString()` 呢？
```js
console.log("jerry".toString());//jerry
console.log((1).toString());//1
console.log([1,2].toString());//1,2
console.log(new Date().toString());//Wed Dec 21 2016 20:35:48 GMT+0800 (中国标准时间)
console.log(function(){}.toString());//function (){}
console.log(null.toString());//error
console.log(undefined.toString());//error
```

这是因为toString为Object的原型方法，而Array 、Function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法。因此，在想要得到对象的具体类型时，应该调用Object上原型toString方法。

> 将数组的toString方法删除，看看会是什么结果
```js
var arr=[1,2,3];
console.log(Array.prototype.hasOwnProperty("toString"));//true
console.log(arr.toString());//1,2,3
delete Array.prototype.toString;//delete操作符可以删除实例属性
console.log(Array.prototype.hasOwnProperty("toString"));//false
console.log(arr.toString());//"[object Array]"
```
删除了 Array 的 toString 方法后，同样再采用 arr.toString() 方法调用时，不再有屏蔽 Object 原型方法的实例方法，因此沿着原型链，arr 最后调用了 Object 的 toString 方法，返回了和 Object.prototype.toString.call(arr) 相同的结果。