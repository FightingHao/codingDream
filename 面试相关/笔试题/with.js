{
  function withObj(obj) {
    with (obj) {
      a = 2
    }
  }

  let o1 = {
    a: 1,
  }

  let o2 = {
    b: 1,
  }

  withObj(o1);
  console.log(o1);

  console.log(o1.a); // 2

  withObj(o2);
  console.log(o2);
  console.log(o2.a); // undefined
  console.log(a); // 2
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with