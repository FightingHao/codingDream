'use strict'

// 对象属性暴露  容易被修改 不安全
var Book = function (isbn, title, author) {
  if (isbn === undefined)
    throw new Error('isbn is undefined')

  if (!this.checkIsbn(isbn))
    throw new Error('isbn is invalid')

  if (isbn.indexOf('x') == -1) {
    return false;
  }

  this.isbn = isbn
  this.title = title || 'hello JS'
  this.author = author
  console.log(this)
}

Book.prototype = {
  checkIsbn(isbn) {
    if (isbn === undefined || typeof isbn !== 'string')
      return false

    if (isbn.length != 10 && isbn.length != 13) {
      return false
    }
    return true
  },

  getIsbn() {
    return this.isbn
  },
  setIsbn(isbn, level) {
    if (level !== 'admin') {
      console.log('您当前没有权限')
      return
    }
    if (!this.checkIsbn(isbn))
      throw new Error('isbn is invalid')

    this.isbn = isbn
  },

  getTitle() {
    return this.title
  },

  setTitle(title) {
    this.title = title
  },

  getAuthor() {
    return this.author
  },
  setAuthor(author) {
    this.author = author
  }
}


// 函数的执行方式， 决定this的指向
// 1. 在非严格模式时，作为普通函数 this指向全局， 浏览器 window node 后端 global, 当启用严格模式 undefined
var book = new Book('123456x123')
// book.setIsbn('123456x126', 'admin')

// console.log(book.getIsbn());
// console.log(book instanceof Book);