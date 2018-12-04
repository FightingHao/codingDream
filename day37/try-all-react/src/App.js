import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

export default class App extends Component {
  // es6新语法
  state = {
    characters: [
      {
        'name': 'hao',
        'job': 'FE'
      },
      {
        'name': '11',
        'job': 'FE'
      },
      {
        'name': '22',
        'job': 'FE'
      }
    ]
  }

  // onLoad
  componentDidMount() {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
        console.log(result)
      })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }

  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
}
