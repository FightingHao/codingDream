import React, { Component } from 'react'

const TableBody = props => {
  const { characterData } = props
  // 函数式组件 纯函数
  const rows = characterData.map((row, index) =>
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <a className="btn btn-primary" href="javascript:;" onClick={() => props.removeCharacter(index)}>删除</a>
      </td>
    </tr>
  )
  return <tbody>{rows}</tbody>
  /* return (
    <tbody>
      {
        characterData.map((item, index) =>
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.job}</td>
          </tr>
        )
      }
    </tbody>
  ) */
}

export default TableBody