import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppBar from './AppBar'
import { Switch, Route } from 'react-router-native'
import ConfigurationPage from '../pages/ConfigurationPage'
import TimerPage from '../pages/TimerPage'
import theme from '../../theme/defaultTheme'
import Blank from '../pages/Blank'

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <ConfigurationPage />
        </Route>

        <Route path="/timer" exact>
          <TimerPage />
        </Route>

        <Route path="/blank" exact>
          <Blank />
        </Route>
      </Switch>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background
  }
})

export default Main
