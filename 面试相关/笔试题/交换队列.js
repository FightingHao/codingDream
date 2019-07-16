/* 拉齐有一个01序列，他可以对这个序列进行任意多次变换，
每次变换都是把序列的最后若干个元素放到最前面，例如：010011，
将最后3个元素011放到最前面，序列变为011010。所有变换结束后，
拉齐需要挑出一个全为1的连续区间，要求最大化区间长度。 */

function swap(str) {
  if (str.length < 0 || str.length > 50000) {
    throw new Error('length error')
  }

  if (str.length > 3) {
    str = str.slice(-3) + str.slice(0, -3)
  }

  var tempArr = []
  var len = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '1') {
      len++
    }
    if (str[i] == '0' || (str.length - 1) == i) {
      tempArr.push(len)
      len = 0
    }
  }

  len = tempArr[0]
  for (var j = 1; j < tempArr.length; j++) {
    if (len < tempArr[j]) {
      len = tempArr[j]
    }
  }
  return len
}