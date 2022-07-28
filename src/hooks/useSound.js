import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'
const source = {
  repBreak: require('../../assets/sounds/RepBreak.wav'),
  repetition: require('../../assets/sounds/Repetition.wav'),
  roundBreak: require('../../assets/sounds/RoundBreak.wav'),
  end: require('../../assets/sounds/End.wav')
}

const useSound = () => {
  const [sound, setSound] = useState()

  const play = async (soundName) => {
    const { sound } = await Audio.Sound.createAsync(source[soundName])
    setSound(sound)

    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => { sound.unloadAsync() }
      : undefined
  })

  return {
    play
  }
}

export default useSound
