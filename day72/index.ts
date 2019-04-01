/* var a = 1
a = true */
// Type 'true' is not assignable to type 'number'

// var a: number = 1

var a = [1, 2] // es5 定义数组方式

var arr: number[] = [1]

var arr2: Array<number> = [1, 2]

// 元组类型 属于数组的一种
var arr3: Array<any> = [1, '1']

var arr4: [number, string, any] = [1, '2', 1]

// 枚举类型
enum Flag {
  Success = 'success',
  Fail = 6
}

let res: Flag = Flag.Success

console.log(Flag[5]);

// HTMLElement | null 不属于object
var dom: any = document.getElementById('root')
dom.style.color = 'red'

var num: undefined
console.log(num);

var nev: never
nev = (() => {
  throw new Error('hello')
})()