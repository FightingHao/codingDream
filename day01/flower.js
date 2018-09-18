var xiaoming = {
  name: '小明',
  sex: '男',
  single: true,
  classroom: '161',
  hometown: '赣州',
  sendFlower: function (target) {
    console.log(this.name + '送花给' + target.name)
    target.receiveFlower(this)
  }
}

var xiaohong = {
  name: '小红',
  sex: '女',
  single: true,
  classroom: '161',
  receiveFlower: function (sender) {
    if (sender.name === '小丽') {
      console.log('看个电影试试')
    } else {
      console.log('扔了')
    }
  },
  listenGoodMod: function (people) {
    setTimeout(() => {
      this.receiveFlower(people)
    }, 10000);
  }
}

var xioali = {
  name: '小丽',
  sex: '女',
  single: true,
  hometown: '赣州',
  receiveFlower: function (sender) {
    xiaohong.listenGoodMod(this)
  }
}

// xiaoming.sendFlower(xiaohong)
xiaoming.sendFlower(xioali)
