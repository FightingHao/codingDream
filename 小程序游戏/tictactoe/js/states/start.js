class Start extends Phaser.State {
  // 第一页加载资源
  preload() {
    // console.log('preload')
    this.load.image('bg_menu', 'images/bg_menu.png')
  }

  create() {
    // console.log('create')
    this.game.add.image(0, 0, 'bg_menu')
  }
}

module.exports = Start