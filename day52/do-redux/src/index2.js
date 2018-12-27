import appState from './redux/state'

// 组建只是用自己的状态 不需要redux
// head 会用body body 会用head
function renderHead(state) {
  const head = document.getElementById('head')
  head.innerText = state.head.text
  head.style.color = state.head.color
  // 隐患 getState 读是无所谓的 修改状态的值 只有按规矩办
  // action 对状态写
  // state.body.text = '我是经过head修改过的body'
  dispatch(state, { type: 'BODY_TEXT', text: '我是经过head修改过的body'})
}

function renderBody(state) {
  const body = document.getElementById('body')
  body.innerText = state.body.text
  body.style.color = state.body.color
}

function renderApp(state) {
  renderHead(state)
  renderBody(state)
}

// UI render
renderApp(appState)