import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class HelloUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hao'
    }
    // this.handleChange = this.handleChange.bind(this)
    /* setTimeout(() => {
      this.setState({
        username: 'zhh'
      })
    }, 3000) */
  }

  render() {
    /* return (
      <div>Hello World!</div>
    ) */
    /* return React.createElement(
      'div',
      null,
      'hello zhh'
    ) */
    return (
      <div>
        <input
          type="text"
          // 匿名箭头函数
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    )
  }

  handleChange(e) {
    console.log(e)
    console.log(e.target.value)
    console.log(this)
    this.setState({
      username: e.target.value
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
