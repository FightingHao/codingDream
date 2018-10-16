let isDone: boolean = false

isDone = true

let decLiteral: number = 6

decLiteral = 7

let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

// 字符串
let nickName: string = 'hao'
let age: number = 37
let sentence: string = `Hello, my name is ${nickName}
                        I'll be ${age++} years old next month`

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]   //泛型声名

let notSure: any = true  //任何类型
notSure = 'hao'