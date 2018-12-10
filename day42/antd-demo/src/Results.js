import React, { Component } from 'react'
import Detail from './Detail'
import Loader from './Loader'
import PropTypes from 'prop-types'


export default class Results extends Component {
  static propTypes = {
    beers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    if (this.props.loading) {
      return <Loader message="Beer run!" />
    }
    return (
    <div className="results">
      <div className="beers">
        {
          this.props.beers.map((beer, i) =>
            <Detail beer={beer} key={i}></Detail>
          )
        }
      </div>
    </div>
    )
  }
}
