import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import ValueConfiguration from '../components/ValueConfiguration'
import configEspecification from '../data/configEspecification'
import { useHistory } from 'react-router-native'
import useLocalConfig from '../hooks/useLocalConfig'
import theme from '../../theme/defaultTheme'

const ConfigurationPage = () => {
  const { localConfig, updateLocalConfig } = useLocalConfig()
  const navigate = useHistory()

  if (!localConfig) {
    return null
  }

  const handlePress = () => {
    navigate.push('/timer')
  }

  return (
    <View style={styles.container} >
      {
        configEspecification.map(configEsp => (
          <ValueConfiguration key={configEsp.key}
            title={configEsp.title}
            name={configEsp.name}
            isDuration={configEsp.isDuration}
            interval={configEsp.interval}
            limits={configEsp.limits}
            style={styles.config}
            localConfig={localConfig}
            updateLocalConfig={updateLocalConfig} />
        ))
      }
      <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
        <Text style={styles.submitText}>Workout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginVertical: 20
  },
  config: {
    marginBottom: 20
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#215454',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#54BAB9'
  },
  submitText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    color: theme.colors.light
  }
})

export default ConfigurationPage
