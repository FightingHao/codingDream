const DEG = Math.PI / 180;
const POWER = 10;
const G = 5; //重力
const Duration = .4e3;

const Quad = Math.tween.Quad;

class Partical {
  constructor() {
    this.StartTime = -1;
    this.direction = 'UP';
    this.delay = 0;
    this.targetZ = 0;
    this.targetY = 0;
    this.targetX = 0;
    this.scaleNum = 1;
    this.animating = false;
    this.parent = null;
    this.animEndCBList = []; // 回调函数列表
    this.con = null;
    this.dom = document.createElement('div');
    this.dom.classList.add('Boom-Partical_Holder');
    this.dom.innerHTML = `
      <div class="Boom-Partical_con">
      Boom
      </div>
    `;
  }
  renderIn(con) {
    con.appendChild(this.dom);
    this.parent = con;
  }
}
