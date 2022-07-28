import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ParseTimeText from '../utilities/ParseTimeText'
import PropType from 'prop-types'
import theme from '../../theme/defaultTheme'

const TimeDisplay = ({ time, state, style = {}, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.state}>State: {state}</Text>
      <ParseTimeText
        time={time}
        style={styles.time} />
    </View>
  )
}

TimeDisplay.propTypes = {
  time: PropType.number.isRequired,
  state: PropType.string.isRequired,
  style: PropType.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04344a',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: theme.colors.primaryLight
  },
  state: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 10,
    color: theme.colors.light
  },
  time: {
    fontSize: 25,
    fontWeight: '400',
    color: theme.colors.light
  }
})

export default TimeDisplay
