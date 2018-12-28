import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Head extends Component {
  static contextTypes = {
    store: PropTypes.object,
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

  render() {
    return (
      <div className="head">
        {this.state.head}
      </div>
    )
  }
}
