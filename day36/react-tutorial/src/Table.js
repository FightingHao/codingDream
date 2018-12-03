import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hao</td>
            <td>111</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>hao</td>
            <td>111</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>hao</td>
            <td>111</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
