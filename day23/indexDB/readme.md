- 数据保存
  1. localStorge 小的， 结构简单的数据 复杂结合 JSON.stringify() JSON.parse() 大小2-6M之间
  2. cookie
    document.cookie = 'uid=1000'
    cookie 就是一个字符串 key=val 非常重要的信息 并且在每次http请求都会带上

- indexedDB 让前端释放野心的数据库， 前端的mongodb
  1. request
    window.indexedDB().open(dbname, dbversion)
  2. 异步的
    onsuccess 开始数据业务
    onupgradeneeded 更新数据库
    db.createObjectStore()
    objectStore.createIndex('email', 'email', { unique: true })
  3. 事务 transaction 让数据存储更安全
    add request
