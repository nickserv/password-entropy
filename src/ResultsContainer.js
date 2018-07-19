import { colors } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import Results from './Results'

export const dicewareWords = 7776

const entropyTips = [
  {
    color: colors.red,
    minimum: 0,
    strength: 'Very Weak'
  },
  {
    color: colors.yellow,
    minimum: 32,
    strength: 'Weak'
  },
  {
    color: colors.blue,
    minimum: 64,
    strength: 'Strong'
  },
  {
    color: colors.green,
    minimum: 128,
    strength: 'Very Strong'
  }
]

const toggles = {
  'Lowercase Letters': 26,
  'Uppercase Letters': 26,
  Numbers: 10,
  Symbols: 8
}

export default function ResultsContainer({
  length,
  options: { Custom, Generic },
  optionsKey
}) {
  const possibleItems = {
    Generic: Object.entries(Generic)
      .filter(([key, value]) => value)
      .map(([key]) => toggles[key])
      .reduce((x, y) => x + y),
    Diceware: dicewareWords,
    Custom
  }

  const possiblePasswords = possibleItems[optionsKey] ** length
  const approximate = possiblePasswords > Number.MAX_SAFE_INTEGER
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))
  const entropyTip = Array.from(entropyTips)
    .reverse()
    .find(tip => entropyBits >= tip.minimum, entropyTips)

  return (
    <Results
      possiblePasswords={possiblePasswords}
      approximate={approximate}
      entropyBits={entropyBits}
      entropyTip={entropyTip}
    />
  )
}

ResultsContainer.propTypes = {
  length: PropTypes.number.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      'Lowercase Letters': PropTypes.bool.isRequired,
      'Uppercase Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
