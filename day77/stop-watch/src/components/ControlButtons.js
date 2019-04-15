import React from 'react'
import PropTypes from 'prop-types'

const ControlButtons = ({ active, onStart, onPause, onReset, onSplit }) => {
  if (active) {
    return (
      <div>
        <button onClick={onSplit}>计次</button>
        <button onClick={onPause}>停止</button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={onReset}>复位</button>
      <button onClick={onStart}>开始</button>
    </div>
  )
}

ControlButtons.propTypes = {
  active: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired
}

export default ControlButtons
