import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Detail extends Component {
  render() {
    const { name, labes, id } = this.props.beer

    const image = 'https://img14.360buyimg.com/n7/jfs/t20569/97/1194982666/203143/26dfa4f7/5b22050aNfd2ffc77.jpg'

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${name}`}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </Link>
      </div>
    )
  }
}