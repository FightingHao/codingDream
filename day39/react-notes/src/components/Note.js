import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-CN')

// Note 展示单条笔记， 状态
export default class Note extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    entity: this.props.entity,
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    // 笔记隐私
    open: false
  }

  render() {
    const ts = moment(this.state.updated).fromNow()
    return (
      <div className="item">
        {this.state.body}
        {ts}
      </div>
    )
  }
}
