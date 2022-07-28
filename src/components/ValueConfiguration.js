import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ParseTimeText from '../utilities/ParseTimeText'
import PropTypes from 'prop-types'
import theme from '../../theme/defaultTheme'

const ValueConfiguration = ({ title, name, isDuration = false, interval, limits, localConfig, updateLocalConfig, style = {} }) => {
  const handlePress = (isSum) => {
    let newValue = 0
    if (isSum) {
      if (localConfig[name] + interval <= limits.max) {
        newValue = localConfig[name] + interval
      }
    } else {
      if ((localConfig[name] - interval) >= limits.min) {
        newValue = localConfig[name] - interval
      }
    }

    if (newValue !== 0) { updateLocalConfig(localConfig, name, newValue) }
  }

  if (!localConfig) {
    return null
  }

  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity
      style={[styles.buttonContainer, styles.borderLeft]}
      onPress={() => handlePress(false)}
      activeOpacity={0.6} >
      <Text style={styles.buttonText}>−</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {isDuration
          ? <Text style={styles.value}>{<ParseTimeText time={localConfig[name]}/>}</Text>
          : <Text style={styles.value}>{localConfig[name]}</Text>}
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.borderRight]}
        onPress={() => handlePress(true)}
        activeOpacity={0.6} >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
  </View>
  )
}

ValueConfiguration.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isDuration: PropTypes.bool,
  interval: PropTypes.number.isRequired,
  limits: PropTypes.object.isRequired,
  localConfig: PropTypes.object.isRequired,
  updateLocalConfig: PropTypes.func.isRequired,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#04344a',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#54BAB9'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#54BAB9',
    backgroundColor: '#3C415C'
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlignVertical: 'center',
    fontWeight: '500'
  },
  title: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '400',
    color: theme.colors.light
  },
  value: {
    fontSize: 16,
    color: theme.colors.light
  },
  borderLeft: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderRightWidth: 4
  },
  borderRight: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderLeftWidth: 4
  }
})

export default ValueConfiguration
