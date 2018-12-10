import React, { Component } from 'react'

export default class Editor extends Component {
  state = {
    entity: this.props.entity, // 修改
    body: this.props.entity.body,
    updateEntity: this.props.updateEntity
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea
            rows="5"
            placeholder="写点东西..."
            // 屏蔽表单默认改变
            defaultValue={this.state.body}
            onInput={(event) => this.state.updateEntity(event)}
          >
          </textarea>
        </div>
      </div>
    )
  }
}
