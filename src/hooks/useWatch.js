import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useSound from './useSound'

const defaulStateValues = {
  start: false,
  end: false,
  endSound: false
}

const useWatch = (schechle) => {
  const [stateValues, setStateValues] = useState(defaulStateValues)
  const [watchValues, setWatchValues] = useState({ actualRound: 0, actualRepetition: 0, actualState: 'Repetition' })
  const [time, setTime] = useState(0)
  const [enableTimer, setEnableTimer] = useState(false)
  const { play } = useSound()

  useEffect(() => {
    if (!stateValues.end) {
      let timeInterval = null

      // Watch repetitions, rounds and breaks logic handler block

      if (watchValues.actualRepetition < schechle.repetitions) {
        if ((watchValues.actualState === 'RepBreak') && (time === schechle.repetitionBreak + 1)) {
          play('repetition')
          resetTimer(timeInterval)
          setSpecificWatchValue('actualState', 'Repetition')
        } else if ((watchValues.actualState === 'Repetition') && (time === schechle.repetitionDuration + 1)) {
          resetTimer(timeInterval)
          const newActualRepetition = watchValues.actualRepetition + 1
          setSpecificWatchValue('actualRepetition', 1, true)

          if (newActualRepetition === schechle.repetitions) {
            setSpecificWatchValue('actualState', 'RoundBreak')
            play('roundBreak')
          } else {
            setSpecificWatchValue('actualState', 'RepBreak')
            play('repBreak')
          }
        }
      }

      if ((watchValues.actualRound < schechle.rounds)) {
        if ((watchValues.actualState === 'RoundBreak') && (time === schechle.roundBreak + 1)) {
          play('repetition')
          resetTimer(timeInterval)
          setSpecificWatchValue('actualRound', 1, true)
          if (watchValues.actualState === schechle.rounds - 1) {
            resetRepetitions()
          }
        }
      }

      if (enableTimer) {
        timeInterval = setInterval(() => {
          setTime(prev => (prev += 1))
        }, 1000)
      } else {
        clearInterval(timeInterval)
      }

      if (watchValues.actualRound === schechle.rounds) {
        setTimerState('end', true)
      }

      return () => clearInterval(timeInterval)
    } else {
      setTime(0)
      if (!stateValues.endSound) {
        setTimerState('endSound', true)
        play('end')
      }
    }
  }, [enableTimer, time, watchValues, schechle])

  const resetTimer = (timeInterval) => {
    setTime(0)
    return () => clearInterval(timeInterval)
  }

  const setSpecificWatchValue = (valueName, value, addType = false) => {
    if (!addType) {
      setWatchValues(prev => ({ ...prev, [valueName]: value }))
    } else {
      setWatchValues(prev => ({ ...prev, [valueName]: prev[valueName] + value }))
    }
  }

  const resetRepetitions = () => {
    setWatchValues(prev => ({ ...prev, actualRepetition: 0 }))
  }

  const setTimerState = (valueName = '', value = false) => {
    setStateValues(prev => ({ ...prev, [valueName]: value }))
  }

  const pause = () => {
    setEnableTimer(false)
  }

  const resume = () => {
    setEnableTimer(true)
  }

  const start = () => {
    if (!stateValues.start) {
      setTimerState('start', true)
      play('repetition')
    }
    setEnableTimer(true)
  }

  if (!schechle) {
    return null
  }

  return {
    time,
    watchValues,
    pause,
    resume,
    start,
    enableTimer
  }
}

useWatch.propTypes = {
  schechle: PropTypes.object.isRequired
}

export default useWatch
