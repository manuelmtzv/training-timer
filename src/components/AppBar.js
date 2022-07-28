import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import theme from '../../theme/defaultTheme'
import { useHistory } from 'react-router-native'

const AppBar = () => {
  const navigate = useHistory()

  const handlePress = (to) => {
    navigate.push(to)
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handlePress('/')} >
          <Text style={styles.text}>Onyx Workout Timer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#4a909e',
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    paddingVertical: 24
  },
  nav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.primaryLight,
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: '600'
  }
})

export default AppBar
