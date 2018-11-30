class Barrage {
  constructor(obj, ctx) {
    this.value = obj.value
    this.time = obj.time
    this.obj = obj
    this.context = ctx
  }

  init() {
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.fontSize = this.obj.fontSize || this.context.fontSize
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()

    if(this.y < this.fontSize) {
      this.y = this.fontSize
    }else if(this.y > this.context.canvas.height - this.fontSize) {
      this.y = this.context.canvas.height - this.fontSize
    }
  }

  render() {
    this.context.ctx.font = `${this.fontSize}px Arial`
    this.context.ctx.fillStyle = this.color
    this.context.ctx.fillText(this.value, this.x, this.y)
  }
}

export default Barrage