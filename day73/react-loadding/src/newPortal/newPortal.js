import React from 'react';
import ReactDOM from 'react-dom';

class NewPortal extends React.Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }
  render() {
    const { children } = this.props;
    console.log(children)
    return ReactDOM.createPortal(
      children,
      this.node,
    );
  }
}
export default NewPortal