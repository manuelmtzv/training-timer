import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const ParseTimeText = ({ time = 0, style = {} }) => {
  const convertToToDigits = (value) => {
    return value > 9
      ? value.toString()
      : '0' + value
  }

  const parseToMinutes = (time) => {
    const minutes = convertToToDigits(Math.floor((time / 60)))
    const seconds = convertToToDigits(time - minutes * 60)

    return {
      minutes,
      seconds
    }
  }

  const timeValues = parseToMinutes(time)

  return (
    <Text style={style}>{timeValues.minutes} : {timeValues.seconds}</Text>
  )
}

ParseTimeText.propTypes = {
  time: PropTypes.number,
  style: PropTypes.object
}

export default ParseTimeText
