/*** src/index.js  ***/
import React, { Component } from "react";
import "./index.scss";
import NewPortal from './newPortal/newPortal';
export default class MyComponent extends Component {
  render() {
    const { color, size } = this.props;
    const sizeStyle = {
      width: `${size}px`,
      height: `${size}px`
    };
    const colorStyle = {
      border: `1px solid ${color}`,
      borderColor: `${color} transparent transparent transparent`
    };
    const ringStyle = Object.assign({}, colorStyle, sizeStyle);

    return (
      <NewPortal>
        <div className="loading" style={sizeStyle}>
          <div className="loading__ring" style={ringStyle} />
          <div className="loading__ring" style={ringStyle} />
          <div className="loading__ring" style={ringStyle} />
        </div>
      </NewPortal>
    );
  }
}
MyComponent.defaultProps = {
  size: '36',
  color: '#000'
}