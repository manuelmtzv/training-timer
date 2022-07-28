import React from 'react'
import { View, StyleSheet } from 'react-native'
import GoalDisplay from '../components/GoalDisplay'
import useWatch from '../hooks/useWatch'
import useLocalConfig from '../hooks/useLocalConfig'
import TimerButton from '../components/TimerButton'
import TimeDisplay from '../components/TimeDisplay'
import { Feather } from '@expo/vector-icons'
import { useHistory } from 'react-router-native'

const TimerPage = () => {
  const { localConfig } = useLocalConfig()
  const { time, watchValues, pause, start, enableTimer } = useWatch(localConfig)
  const navigate = useHistory()

  if (!watchValues && !localConfig) {
    return null
  }

  const handleReset = () => {
    navigate.push('/blank')
    setTimeout(() => navigate.push('/timer'), 10)
  }

  const handleSettings = () => {
    navigate.push('/')
  }

  return (
    <View style={styles.container} >
      <View style={styles.twoCards}>
        <GoalDisplay
          title='Rounds'
          completed={watchValues.actualRound}
          goal={localConfig.rounds}
          style={ styles.littleCardLeft } />

        <GoalDisplay
          title='Repetitions'
          completed={watchValues.actualRepetition}
          goal={localConfig.repetitions}
          style={ styles.littleCardRight } />
      </View>

      <View style={{ flex: 1 }}>
        <TimeDisplay
          time={time}
          state={watchValues.actualState} />
      </View>

      <View style={styles.twoCards}>
        <View style={{ flex: 1 }}>
          <TimerButton
            element={<Feather name="repeat" size={35} color="white" />}
            callBack={handleReset}
            color="#D9F8C4"
            style={[styles.littleCardLeft, { marginBottom: 10 }]} />
          <TimerButton
            element={<Feather name="corner-down-left" size={35} color="white" />}
            callBack={handleSettings}
            color="#516BEB"
            style={ styles.littleCardLeft } />
        </View>
        <TimerButton
          element={<Feather name={ enableTimer ? 'pause' : 'play' } size={40} color="white" />}
          callBack={ enableTimer ? pause : start }
          color="#F6FFA4"
          style={ styles.littleCardRight } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginVertical: 20
  },
  twoCards: {
    flex: 1,
    flexDirection: 'row'
  },
  littleCardLeft: {
    marginRight: 5
  },
  littleCardRight: {
    marginLeft: 5
  }
})

export default TimerPage
