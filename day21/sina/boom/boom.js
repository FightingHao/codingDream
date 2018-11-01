class Boom {
  // 1. 函数传参可以默认值
  // 2. destructing
  constructor({ childList, container, boomNumber, rotate, spread, delayRange, power } = {}) {
    this.particalList = []; // partical 对象
    this.boomTimer = 0;
    this.boomTimeGap = .1e3;
    this.childList = childList || [];
    this.con = container || null;
    this.particalNumbers = boomNumber || 10;
    this.rotate = rotate || 120;
    this.spread = spread || 180;
    this.delayRange = delayRange || 100;
    this.power = power || 3;
    this.createParticals(this.particalNumbers);
  }
  setContainer(con) {
    this.con = con
  }
  createParticals(num) {
    for (let i = 0; i < num; i++) {
      // 个体， 集体  Boom  Partical
      // 爆炸效果 如何触发， 如何管理， 如何初始化 集体
      // 代码不要耦合，  Partical 类 ， 粒子
      // 独立对象， 创建类， Partical
      let partical = new Partical();
      this.particalList.push(partical);
    }
  }
  boom() {
    let lastBoomTimer = this.boomTimer;
    let now = +new Date();
    if (now - lastBoomTimer < this.boomTimeGap) {
      // 时间的流失， 开关
      return;
    }
    this.boomTimer = now;
    let boomNums = 0;
    // partical 10 运动，
    let unAnimateList = this.particalList.filter(partical => partical.animating == false);
    // console.log(unAnimateList);
    let childList = this.childList;
    let childListLength = childList.length;
    let rotate = this.rotate;
    let spread = this.spread;
    let delayRange = this.delayRange;
    let power = this.power;
    for (let partical of unAnimateList) {
      if (boomNums >= this.particalNumbers) return;
      if (partical.animating) {
        continue;
      }
      boomNums++;
      let r = Math.random();
      partical.renderIn(this.con);
      // 粒子插入的顺序
      partical.insertChild(
        // 性能优化
        childList[Math.floor(r * childListLength)].cloneNode(true)
      );
    }
  }
}
