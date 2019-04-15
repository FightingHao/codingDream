import React from 'react'
import { For } from 'react-loops'
import PropTypes from 'prop-types'

const SplitTimes = ({ splits = [] }) => {
  return (
    <ul>
      <For of={splits.reverse()} as={item => <li>{item}</li>} />
    </ul>
  )
}

SplitTimes.propTypes = {
  splits: PropTypes.array.isRequired
}

export default SplitTimes
