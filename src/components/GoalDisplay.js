import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropType from 'prop-types'
import theme from '../../theme/defaultTheme'

const GoalDisplay = ({ title, goal, completed, style = {} }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>{completed} / {goal}</Text>
    </View>
  )
}

GoalDisplay.propTypes = {
  title: PropType.string.isRequired,
  goal: PropType.number,
  completed: PropType.number.isRequired,
  style: PropType.object
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#04344a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: theme.colors.aqua
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
    color: theme.colors.light
  },
  status: {
    fontWeight: '500',
    color: theme.colors.light,
    fontSize: 18
  }
})

export default GoalDisplay
