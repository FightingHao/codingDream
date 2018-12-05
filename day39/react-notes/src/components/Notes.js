import React, { Component } from 'react'
import { loadCollection, db } from '../database';
import Note from './Note';

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.getInitialData()
  }

  state = {
    entities: []
  }

  getInitialData() {
    loadCollection('notes')
      .then(collection => {
        /* collection.insert([
          { body: 'hello' },
          { body: 'hello1' },
          { body: 'hello2' },
        ])

        db.saveDatabase() */
        const entities
          = collection
            .chain()
            .find()
            .simplesort('$loki', 'isdesc')
            .data()

        this.setState({
          entities
        })
      })
  }

  render() {
    // render 和 return 中间写逻辑
    const entities = this.state.entities
    const noteItems = entities.map(entity =>
      <Note
        key={entity.$loki}
        entity={entity}
      />
    )

    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon" ></i>
        </h4>
        < button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
        <div className="ui divided items">{noteItems}</div>
      </div >
    )
  }

  // 箭头函数赋值法
  createEntity = () => {
    console.log(this)
  }
}
