import padStart from 'lodash/padStart'

const ms2Time = (milliseconds) => {
  const ms = milliseconds % 1000
  milliseconds = (milliseconds - ms) / 1000
  const seconds = milliseconds % 60
  milliseconds = (milliseconds - seconds) / 60
  const minutes = milliseconds % 60
  const hours = (milliseconds - minutes) / 60

  return padStart(hours, 2, '0') + ':' + padStart(minutes, 2, '0') + ':' + padStart(seconds, 2, '0') + '.' + padStart(ms, 3, '0')
}

export default ms2Time