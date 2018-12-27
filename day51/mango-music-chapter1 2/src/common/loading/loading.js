import React, { Component } from 'react'
// 这样写的好处是可以直接使用花括号{} 输出到JSX
import loadingImg from './loading.gif'
import './loading.styl'

export default class Loading extends Component {
  render() {
    let displayStyle = this.props.show ? { display: '' } : { display: 'none' }
    return (
      <div
        className="loading-container"
        style={displayStyle}
      >
        <div className="loading-wrapper">
          <img src={loadingImg} alt="loading" width="18px" height="18px" />
          <div className="loading-title">
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}