import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  // 创建标记
  searchRef = React.createRef()

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          {/* ref相当于id */}
          <input type="text" ref={this.searchRef} placeholder="hello 南昌8度"></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = this.searchRef.current.value
    // 上下文环境
    this.context.router.history.push(`/search/${searchTerm}`)
    console.log(this.context)

  }
}
