// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import PropTypes from 'prop-types'
// import enchanceComponent from './enchanceComponent.jsx'

// var Content = (props) => <p>I am {props.name}</p>

// Content.propTypes = {
//   name: PropTypes.string
// }

// var EnhancedContent = enchanceComponent(Content)

// class App extends Component {
//   render() {
//     return (
//       <EnhancedContent
//         name="Content component"
//       />
//     )
//   }
// }

// export default App;

import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  componentDidMount() {
    const url = 'https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get'
    axios.get(url)
      .then((res) => {
        this.props.store.dispatch({
          type: 'GET_FILM_DATA',
          payload: res.data.data.films
        })
      })
  }

  render() {
    const films = this.props.store.getState().films
    // const films = this.state.films
    console.log(films)

    return (
      <div>
        <ul>
          {
            films.map((film, index) => (
              <li key={index}>
                <h2>{film.name}</h2>
                <img src={film.poster} alt={film.name} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
