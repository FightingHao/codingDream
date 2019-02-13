var a = [1, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
Array.prototype.duplicate = function () {
  return this.reduce(function (cal, cur) {
    console.log(cal, cur);

    if (cal.indexOf(cur) === -1) {
      cal.push(cur);
    }
    return cal;
  }, [])
}

var newArr = a.duplicate()
console.log(newArr)