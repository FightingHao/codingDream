import { loadImage } from "./assetUtil";

// 主函数  入口 自动执行
class Main extends egret.DisplayObjectContainer {
  constructor() {
    super()
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
  }

  onAddToStage(event) {
    /* let textField = new egret.TextField()
    this.addChild(textField)
    textField.textColor = 0xff0000
    textField.text = '你好' */
    this.createGame()
  }

  async createGame() {
    // 加载资源 Promise.All
    const assets = [
      'assets/background.png',
      'assets/hero.png',
      'assets/enemy.png'
    ]

    const bitmaps = await loadImage(assets) as egret.Bitmap[]
    const [] = bitmaps
    const [bg, hero, enemy] = bitmaps
    this.addChild(bg)
    this.addChild(hero)
    this.addChild(enemy)

    this.centerAnchor(hero)
    this.centerAnchor(enemy)

    enemy.x = this.stage.stageWidth / 2
    enemy.y = 200

    hero.x = this.stage.stageWidth / 2
    hero.y = this.stage.stageHeight - 100
  }

  centerAnchor(displayObject: egret.DisplayObject) {
    displayObject.anchorOffsetX = displayObject.width / 2
    displayObject.anchorOffsetY = displayObject.height / 2
  }
}


window['Main'] = Main
egret.runEgret()
