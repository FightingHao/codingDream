/* var a = 1
a = true */
// Type 'true' is not assignable to type 'number'
// var a: number = 1
var a = [1, 2]; // es5 定义数组方式
var arr = [1];
var arr2 = [1, 2];
// 元组类型 属于数组的一种
var arr3 = [1, '1'];
var arr4 = [1, '2', 1];
// 枚举类型
var Flag;
(function (Flag) {
    Flag["Success"] = "success";
    Flag[Flag["Fail"] = 6] = "Fail";
})(Flag || (Flag = {}));
var res = Flag.Success;
console.log(Flag[5]);
// HTMLElement | null 不属于object
var dom = document.getElementById('root');
dom.style.color = 'red';
var num;
console.log(num);
var nev;
nev = (function () {
    throw new Error('hello');
})();
