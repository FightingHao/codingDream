import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { filmAction } from './actions'

// redux 负责解决films api action
// action 应该由组件来触发
class App extends Component {
  // 组件不负责处理数据 但可以触发事件action
  componentDidMount() {
    this.props.getFilmData()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.films.map((film, index) => (
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

const mapStateToProps = (state) => {
  console.log(state)
  return { films: state.films }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmData: () => {
      // axios
      //   .get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
      //   .then(res => {
      //     dispatch({
      //       type: 'GET_FILM_DATA',
      //       payload: res.data.data.films
      //     })
      //   })
      // 先做请求 再做dispatch
      dispatch((dispatch) => {
        filmAction(dispatch)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)