import Barrage from './barrage'

class CanvasBarrage {
  constructor(vanvas, video, opts = {}) {
    if (!canvas || !video) return
    this.canvas = canvas
    this.video = video
    this.canvas.width = video.width
    this.canvas.height = video.height
    this.ctx = this.canvas.getContext('2d')
    let defOpts = { // 默认弹幕信息
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }
    Object.assign(this, defOpts, opts)
    // console.log(this)
    this.isPaused = true
    this.barrages = this.data.map(item => new Barrage(item, this))
  }

  render() {
    this.clear()
    this.renderBarage()
    if (!this.isPaused) {
      requestAnimationFrame(this.render.bind(this))
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  renderBarage() {
    let time = this.video.currentTime
    console.log(time)
    this.barrages.forEach(barrage => {
      if (!barrage.flag && time >= barrage.time) {
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }
        barrage.x -= barrage.speed
        barrage.render()
      }

      // barrage 超出了屏幕 当时间到了 出现在最右边 走过整个canvas的宽度 消失了
      // clear
      if (barrage.x < -barrage.width) {
        barrage.flag = true
      }
    })
  }
}

export default CanvasBarrage