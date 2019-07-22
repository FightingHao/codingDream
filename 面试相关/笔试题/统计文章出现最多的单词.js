function counts(article) {
  article = article.trim().toUpperCase();
  var array = article.match(/[A-z]+/g);
  article = " " + array.join(" ") + " ";
  var max = 0, word, num = 0, maxword = "";
  for (var i = 0; i < array.length; i++) {
    word = new RegExp(" " + array[i] + " ", 'g');
    num = article.match(word).length;
    if (num > max) {
      max = num;
      maxword = array[i];
    }
  }
  console.log(maxword + " " + max);
}
counts("Age has reached the end of the beginning of a word. May be guilty in his seems to passing a lot of different life became the appearance of the same day;");