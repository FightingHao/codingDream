var series = ['a1', 'a3', 'a1', 'a5', 'a7', 'a1', 'a3', 'a4', 'a2', 'a1'];

var result = series.reduce(function (accumulator, current) {
  if (current in accumulator) {
    accumulator[current]++;
  }
  else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});

console.log(JSON.stringify(result));
// {"a1":4,"a3":2,"a5":1,"a7":1,"a4":1,"a2":1}
