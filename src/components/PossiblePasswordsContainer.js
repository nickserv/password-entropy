import { blue, green, red, yellow } from 'material-ui/colors'
import PropTypes from 'prop-types'
import { always, filter, findLast, identity, keys, map, pipe, sum } from 'ramda'
import React from 'react'

import PossiblePasswords from './PossiblePasswords'

export const dicewareWords = 7776

const entropyTips = [
  {
    color: red,
    minimum: 0,
    strength: 'Very Weak'
  },
  {
    color: yellow,
    minimum: 32,
    strength: 'Weak'
  },
  {
    color: blue,
    minimum: 64,
    strength: 'Strong'
  },
  {
    color: green,
    minimum: 128,
    strength: 'Very Strong'
  }
]

const toggles = {
  letters: 26,
  capitalLetters: 26,
  numbers: 10,
  symbols: 8
}

const possibleItems = {
  generic: pipe(filter(identity), keys, map(key => toggles[key]), sum),
  diceware: always(dicewareWords),
  custom: identity
}

export default function PossiblePasswordsContainer({
  length,
  options,
  optionsKey
}) {
  const possiblePasswords =
    possibleItems[optionsKey](options[optionsKey]) ** length
  const approximate = possiblePasswords > Number.MAX_SAFE_INTEGER
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))
  const entropyTip = findLast(tip => entropyBits >= tip.minimum, entropyTips)

  return (
    <PossiblePasswords
      possiblePasswords={possiblePasswords}
      approximate={approximate}
      entropyBits={entropyBits}
      entropyTip={entropyTip}
    />
  )
}

PossiblePasswordsContainer.propTypes = {
  length: PropTypes.number.isRequired,
  options: PropTypes.shape({
    custom: PropTypes.number.isRequired,
    generic: PropTypes.shape({
      letters: PropTypes.bool.isRequired,
      capitalLetters: PropTypes.bool.isRequired,
      numbers: PropTypes.bool.isRequired,
      symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
