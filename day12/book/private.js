var Book = (function () {
  var total = 0
  return function (newIsbn, newTitle, newAuthor) {
    var isbn, title, author

    // 私有方法
    var checkIsbn = function (isbn) {
      if (isbn === undefined || typeof isbn !== 'string')
        return false

      if (isbn.length != 10 && isbn.length != 13) {
        return false
      }
      return true
    }

    this.setTitle = function (newTitle) {
      title = newTitle
    }

    this.getTitle = function () {
      return title
    }

    this.setIsbn = function (newIsbn) {
      if(checkIsbn(newIsbn)) {
        isbn = newIsbn
      }
    }

    this.getIsbn = function () {
      return isbn
    }

    this.getTotal = function () {
      return total
    }
    total++
  }
})()

// 静态方法
Book.convertTotalCase = function (inputString) {
  return inputString.toUpperCase()
}

// 公有方法
Book.prototype = {
  display: function () {
    console.log('书名：' + this.getTitle() + ', 作者名：' + this.getTitle())
  }
}

var book = new Book()
book.setTitle(1)
console.log(book.getTitle())
console.log(book.getTotal())
