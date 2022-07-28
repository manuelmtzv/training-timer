import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const TimerButton = ({ element = null, title, callBack, style = {}, color = '', ...props }) => {
  return (
    <TouchableOpacity style={[style, styles.container, { borderColor: color }]} onPress={callBack} >
      { element || <Text style={styles.title}>{title}</Text> }
    </TouchableOpacity>
  )
}

TimerButton.propTypes = {
  element: PropTypes.element,
  title: PropTypes.string,
  callBack: PropTypes.func.isRequired,
  style: PropTypes.any,
  color: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04344a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 4
  },
  title: {
    fontSize: 18
  }
})

export default TimerButton
