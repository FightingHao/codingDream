import React, { Component } from 'react'
import Results from './Results'
import Search from './Search'

export default class Beer extends Component {
  state = {
    beers: [],
    loading: true
  }

  // 组件挂载完毕的生命周期
  componentDidMount() {
    this.loadBeers()
  }

  componentDidUpdate(prevProps) {
    const currentSearchTerm = this.props.match.params.searchTerm
    console.log(prevProps)
    const oldSearchTerm = prevProps.match.params.searchTerm
    if (oldSearchTerm != currentSearchTerm)
      this.loadBeers(currentSearchTerm)
  }

  render() {
    return (
      <div className="wrapper">
        <Search></Search>
        <Results
          beers={this.state.beers}
          loading={this.state.loading}
        />
      </div>
    )
  }

  loadBeers = (searchTerm = 'hops') => {
    this.setState({
      loading: true
    })
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(data => {
        const beers = data.data || []
        this.setState({
          beers: beers,
          loading: false
        })
      })
      .catch(err => console.error(err))
  }
}
