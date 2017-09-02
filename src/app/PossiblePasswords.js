import { Card, CardText, LinearProgress } from 'material-ui'
import { colors } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { always, filter, findLast, identity, keys, map, pipe, sum } from 'ramda'
import React from 'react'
import Icon from 'react-fa'
import { connect } from 'react-redux'

import { dicewareWords } from '../options/DicewareOptions'
import { toggles } from '../options/GenericOptions'

const entropyTips = [
  {
    color: colors.red500,
    minimum: 0,
    strength: 'Very Weak'
  },
  {
    color: colors.yellow500,
    minimum: 32,
    strength: 'Weak'
  },
  {
    color: colors.blue500,
    minimum: 64,
    strength: 'Strong'
  },
  {
    color: colors.green500,
    minimum: 128,
    strength: 'Very Strong'
  }
]

export function PossiblePasswords({
  possiblePasswords, approximate, entropyBits, entropyTip: { color, strength }
}) {
  return (
    <Card>
      <CardText>
        <h3><Icon name="list" /> Entropy</h3>
        {entropyBits.toFixed(2)} bits ({strength})
        <LinearProgress color={color} max={128} mode="determinate" value={entropyBits} />

        <h3><Icon name="random" /> Possible Passwords</h3>
        {approximate && '~ '}{possiblePasswords.toLocaleString()}
      </CardText>
    </Card>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    color: PropTypes.string.isRequired,
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired
}

const possibleItems = {
  generic: pipe(
    filter(identity),
    keys,
    map(key => toggles[key].possibleItems),
    sum
  ),
  diceware: always(dicewareWords),
  custom: identity
}

export function mapStateToProps({ length, options, optionsKey }) {
  const possiblePasswords = possibleItems[optionsKey](options[optionsKey]) ** length
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))

  return {
    approximate: possiblePasswords > Number.MAX_SAFE_INTEGER,
    entropyBits,
    entropyTip: findLast(tip => entropyBits >= tip.minimum, entropyTips),
    possiblePasswords
  }
}

export default connect(mapStateToProps)(PossiblePasswords)
