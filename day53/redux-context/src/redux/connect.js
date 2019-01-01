import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const connect = (Copm, propsType) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object,
      dispatch: PropTypes.func,
      subscribe: PropTypes.func,
      getStore: PropTypes.func,
      ...propsType
    }

    constructor(props) {
      super(props)
      this.state = {
        dispatch: () => { }
      }
    }

    _upState() {
      const { getStore } = this.context
      this.setState({
        ...getStore()
      })
    }

    componentWillMount = () => {
      const { subscribe, dispatch } = this.context
      this.setState({ dispatch })
      this._upState()
      subscribe(() => this._upState())
    }

    render() {
      return (
        <div className="connect">
          <Copm {...this.state} />
        </div>
      )
    }
  }

  return Connect
}