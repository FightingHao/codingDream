var data = [];

for (var i = 0; i < 3; i++) {
/*  data[0]Context = {
    Scope: [AO, globalContext]
  }
  data[1]Context = {
    Scope: [AO, globalContext]
  }
  data[2]Context = {
    Scope: [AO, globalContext]
  } */
  // 立即执行函数 两次入栈 第二次维持对第一次入栈的引用
  data[i] = (function (i) {
    return function () {
      console.log(i)
    }
  })(i)
}

data[0]();
data[1]();
data[2]();


/* globalContext = {
  VO: {
    data: [],
    i: 3
  }
} */