import CanvasBarrage from './canvas_barrage'

let data = [
  {
    value: '周杰伦听妈妈的话，让我反复循环', time: 5, color: 'red', speed: 1, fontSize: 22
  },
  {
    value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30
  },
  {
    value: '听妈妈的话吧，晚点再恋爱吧！爱呢？',
    time: 15
  }
]

let doc = document
// let性能消耗比let多
const canvas = doc.getElementById('canvas'),
  video = doc.getElementById('video'),
  textInput = doc.getElementById('text'),
  btn = doc.getElementById('btn'),
  color = doc.getElementById('color'),
  range = doc.getElementById('range')

let canvasBarrage = new CanvasBarrage(canvas, video, { data })
video.addEventListener('play', () => {
  canvasBarrage.isPaused = false
  canvasBarrage.render()
})
video.addEventListener('pause', () => {

})
video.addEventListener('seeked', () => {

})