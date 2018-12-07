import React, { Component } from 'react'
import Sidebar from './Sidebar'
// import { Button } from 'antd'

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Button type="primary">点我</Button> */}
        <Sidebar />
      </div>
    )
  }
}
