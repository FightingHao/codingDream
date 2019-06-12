const arr = [1, 2, 3, 4, 5, 6]
const res = arr.reduce((num, current) => num + current, 0) / arr.length
console.log(res)