import React, { Component } from 'react'
import { Consumer } from './context'

export default function Title() {
  return (
    <Consumer>
      {
        ({ title }) => <h1>Title: {title}</h1>
      }
    </Consumer>
  )
}