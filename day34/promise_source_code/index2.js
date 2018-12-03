Promise.resolve("foo")
  // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个resolve返回。
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
  // 并将其打印到控制台中, 但是不将处理后的字符串返回到下一个。
  /* .then(function (string) {
    setTimeout(function () {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  }) */
  // 3. 打印本节中代码将如何运行的帮助消息，
  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
  /* .then(function (string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
      "a promise in the prior then so the sequence may be a bit " +
      "surprising");

    // 注意 `string` 这时不会存在 'baz'。
    // 因为这是发生在我们通过setTimeout模拟的异步函数中。
    console.log(string);
  }); */