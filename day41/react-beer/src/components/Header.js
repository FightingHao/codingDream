import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Header extends Component {
  // 类型规定
  static propTypes = {
    siteName: PropTypes.string
  }
  render() {
    return (
      <h1>
        {/* a标签太弱小 将完全被接管 */}
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    )
  }
}
