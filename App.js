import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { registerRootComponent } from 'expo'

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}

registerRootComponent(App)
