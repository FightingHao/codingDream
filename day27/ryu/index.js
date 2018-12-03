/* 1. 按键事件
  不同的按键做不同的操作
2. 不同的player  JSON */

// 接口
const Ryu = {
  name: 'Ryu',
  attack() {
    console.log(this.name + '攻击')
  },
  defense() {
    console.log(this.name + '防御')
  },
  jump() {
    console.log(this.name + '跳跃')
  },
  crouch() {
    console.log(this.name + '蹲下')
  }
}

// 回放功能  栈 数组
const commandStack = []

const commands = {
  "119": "jump",
  "115": "crouch",
  "97": "defense",
  "100": "attack"
}

const makeCommand = function (receiver, state) {
  return function () {
    if (receiver[state]) {
      receiver[state]()
    }
  }
}

document.onkeypress = function (e) {
  var keyCode = e.keyCode
  var command = makeCommand(Ryu, commands[keyCode])
  if(command) {
    commandStack.push(command)
    command()
  }
}

document.getElementById('backBtn').addEventListener('click', function () {
  var command
  while(command = commandStack.shift()) {
    command()
  }
}, false)