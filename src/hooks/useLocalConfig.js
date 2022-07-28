import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const defaultValues = {
  repetitions: 4,
  rounds: 6,
  repetitionDuration: 30,
  repetitionBreak: 15,
  roundBreak: 45
}

const useLocalConfig = () => {
  const [config, setConfig] = useState(defaultValues)

  const fetchConfig = async () => {
    try {
      let localConfig = await AsyncStorage.getItem('timer_config')

      localConfig = await JSON.parse(localConfig)
      if (localConfig === null) {
        localConfig = defaultValues
      }

      setConfig(localConfig)
    } catch (e) {
      console.log(e)
    }
  }

  const updateLocalConfig = async (config, valueName, value) => {
    try {
      await AsyncStorage.setItem('timer_config', JSON.stringify(({ ...config, [valueName]: value })))
      fetchConfig()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setConfig(fetchConfig())
  }, [])

  return { localConfig: config, updateLocalConfig, fetchConfig }
}

export default useLocalConfig
