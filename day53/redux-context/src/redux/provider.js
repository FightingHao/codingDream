import React, { Component } from 'react'
import { createStore, storeChange } from '../redux'
import PropTypes from 'prop-types'

export class Provider extends Component {
  static childContextTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getStore: PropTypes.func,
  }

  getChildContext() {
    const state = this.props.store
    const { store, dispatch, subscribe, getStore } = createStore(state, storeChange)
    return { store, dispatch, subscribe, getStore }
  }

  render() {
    return (
      <div className="provider">
        {this.props.children}
      </div>
    )
  }
}