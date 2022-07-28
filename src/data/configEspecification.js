export const configEspecification = [
  {
    key: 1,
    title: 'Repetitions',
    name: 'repetitions',
    interval: 1,
    limits: {
      max: 40,
      min: 1
    },
    isDuration: false
  },
  {
    key: 2,
    title: 'Rounds',
    name: 'rounds',
    interval: 1,
    limits: {
      max: 20,
      min: 1
    },
    isDuration: false
  },
  {
    key: 3,
    title: 'Repetition Duration',
    name: 'repetitionDuration',
    interval: 5,
    limits: {
      max: 1200,
      min: 15
    },
    isDuration: true
  },
  {
    key: 4,
    title: 'Repetition Break',
    name: 'repetitionBreak',
    interval: 1,
    limits: {
      max: 60,
      min: 1
    },
    isDuration: true
  },
  {
    key: 5,
    title: 'Round Break',
    name: 'roundBreak',
    interval: 5,
    limits: {
      max: 120,
      min: 5
    },
    isDuration: true
  }
]

export default configEspecification
