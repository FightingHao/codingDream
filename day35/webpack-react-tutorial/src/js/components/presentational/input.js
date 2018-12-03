// react 组件有多种写法 容器组件(继承自Component)+表现型组件(箭头函数)

// props(外界传进数据) + render wxml 表现型组件
import React from 'react';
const Input = ({ label, text, type, id, value, handleChange }) => ( // return
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
)

export default Input;