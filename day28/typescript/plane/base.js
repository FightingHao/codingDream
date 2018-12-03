// 主函数  入口 自动执行
class Main extends egret.DisplayObjectContainer {
  constructor() {
    super()
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  onAddToStage(event) {
    let textField = new egret.TextField()
    this.addChild(textField)
    textField.textColor = 0xff0000
    textField.text = 'hello world'
  }
}

window['Main'] = Main
egret.runEgret()
