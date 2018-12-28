import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static contextTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getStore: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  _upState() {
    const { getStore } = this.context
    this.setState({
      ...getStore()
    })
  }

  // 渲染之前
  componentWillMount = () => {
    const { subscribe } = this.context
    this._upState()
    subscribe(() => this._upState())
  }

  changeContext = (type) => {
    const { dispatch } = this.context
    // const key = type === 'HEAD' ? 'head' : 'body'
    dispatch({
      type,
      // [key]: `我是修改后的${key}`
      payload: `我是修改后的${type}`
    })
  }

  render() {
    return (
      <div className="button">
        <button className="btn" onClick={() => this.changeContext('HEAD')}>{this.state.headBtn}</button>
        <button className="btn" onClick={() => this.changeContext('BODY')}>{this.state.bodyBtn}</button>
      </div>
    )
  }
}
