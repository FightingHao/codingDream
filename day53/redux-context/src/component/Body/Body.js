import React, { Component } from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'


export default class Body extends Component {
  static contextTypes = {
    store: PropTypes.object,
    subscribe: PropTypes.func,
    getStore: PropTypes.func,
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
      <div>
        <div className="body">
          {this.state.body}
        </div>
        <Button />
      </div>
    )
  }
}
