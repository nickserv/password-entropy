import { dicewareWords } from '../options/DicewareOptions'
import FormGroup from '../ui/FormGroup'
import { toggles } from '../options/GenericOptions'
import PropTypes from 'prop-types'
import { always, filter, findLast, identity, keys, map, pipe, sum } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Panel, ProgressBar } from 'react-bootstrap'

const entropyTips = [
  {
    minimum: 0,
    strength: 'Very Weak',
    style: 'danger'
  },
  {
    minimum: 32,
    strength: 'Weak',
    style: 'warning'
  },
  {
    minimum: 64,
    strength: 'Strong',
    style: 'info'
  },
  {
    minimum: 128,
    strength: 'Very Strong',
    style: 'success'
  }
]

export function PossiblePasswords({
  possiblePasswords, approximate, entropyBits, entropyTip: { strength, style }
}) {
  return (
    <Panel>
      <FormGroup id="entropy" label="Entropy" icon="list">
        <ProgressBar bsStyle={style} max={128} now={entropyBits} label={`${entropyBits.toFixed(2)} bits (${strength})`} />
      </FormGroup>

      <FormGroup id="possiblePasswords" label="PossiblePasswords" icon="random">
        <FormControl.Static>{approximate && '~ '}{possiblePasswords.toLocaleString()}</FormControl.Static>
      </FormGroup>
    </Panel>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
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
