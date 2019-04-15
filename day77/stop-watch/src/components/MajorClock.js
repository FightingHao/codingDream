import React from 'react'
import PropTypes from 'prop-types'

import ms2Time from '../utils/ms2Time'

const MajorClock = ({ milliseconds = 0 }) => {
  return (
    <div>
      {ms2Time(milliseconds)}
    </div>
  )
}

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
}

export default MajorClock
