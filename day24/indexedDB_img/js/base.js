/* (function () {
  // 前端数据库 新的html5 兼容性
  const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.mozIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1.1

  let request = indexedDB.open('elephantFiles', dbVersion)
  let db
  let blob = null

  request.onerror = function (event) {
    console.log('error creating/accessing IndexedDB database')
  }

  request.onsuccess = function () {
    db = request.result
    db.onerror = function (event) {
      console.log('err')
    }
    getImageFile()
  }

  request.onupgradeneeded = function (event) {
    console.log(event)
    createObjectStore(event.target.result)
  }

  const createObjectStore = function (dataBase) {
    dataBase.createObjectStore('elephants')
  }

  const getImageFile = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../elephant.png', true)
    xhr.responseType = 'blob' // 二进制流
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        blob = xhr.response
        console.log(blob)
        putElephantInDb(blob)
      }
    })
    xhr.send()
  }

  const putElephantInDb = function (blob) {
    const readWriteMode = typeof IDBTransaction.READ_WRITE == 'undefined' ? 'readwrite' : IDBTransaction.READ_WRITE
    const transcation = db.transcation(['elephants'], readWriteMode)
    transcation.objectStore('elephants').put(blob, 'image')  // 相当于collection 数据表集合
  }
})() */

(function () {
  // 前端数据库， 新的html5 兼容性window
  const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction || window.mozIDBTransaction,
    dbVersion = 2.0;

  let request = indexedDB.open("elephantFiles", dbVersion);
  const createObjectStore = function (dataBase) {
    dataBase.createObjectStore("elephants");
  };
  let db;
  const getImageFile = () => {
    // 图片？ 不在库里， 根目录, 存到库里，
    // 找到图片
    const xhr = new XMLHttpRequest();
    let blob = null;
    xhr.open('GET', 'elephant.png', true);
    xhr.responseType = 'blob'; //内容格式 text/json text text/html
    // console.log(xhr);
    xhr.addEventListener('load', function () {
      console.log(xhr.status);
      if (xhr.status === 200) {
        blob = xhr.response;
        console.log(blob);
        putElephantInDb(blob);
      }
    }, false);
    xhr.send();
  }
  const putElephantInDb = function (blob) {
    const readWriteMode = typeof IDBTransaction.READ_WRITE == 'undefined' ? 'readwrite' : IDBTransaction.READ_WRITE;
    // 事物
    const transaction = db.transaction(["elephants"], readWriteMode);
    transaction.objectStore("elephants").put(blob, "image");
    transaction
      .objectStore('elephants')
      .get('image')
      .onsuccess = function (event) {
        const imgFile = event.target.result
        // block 文件 本地 blob://
        const URL = window.URL || window.webkitURL
        const imgURL = URL.createObjectURL(imgFile)
        console.log(imgURL);
        document.getElementById('elephant').src = imgURL
        document.getElementById('elephant').onload = function () {
          window.URL.revokeObjectURL(this.src)
        }
      }
  }
  request.onerror = function (event) {
    console.log('error creating/accessing IndexedDB database');
  }
  request.onsuccess = function () {
    db = request.result
    db.onerror = function (event) {
      console.log('error')
    }
    getImageFile();
  }
  request.onupgradeneeded = function (event) {
    console.log(event.target.result);
    createObjectStore(event.target.result);
  }

})()
