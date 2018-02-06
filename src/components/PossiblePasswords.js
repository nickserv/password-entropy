import list from '@fortawesome/fontawesome-free-solid/faList'
import random from '@fortawesome/fontawesome-free-solid/faRandom'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { FormControl, Panel, ProgressBar } from 'react-bootstrap'

import FormGroup from './FormGroup'
import possibleItemsSelector from '../reducers/possibleItemsSelector'

export function PossiblePasswords({
  possiblePasswords, approximate, entropyBits, entropyTip: { strength, style }
}) {
  return (
    <Panel>
      <FormGroup id="entropy" label="Entropy" icon={list}>
        <ProgressBar bsStyle={style} max={128} now={entropyBits} label={`${entropyBits.toFixed(2)} bits (${strength})`} />
      </FormGroup>

      <FormGroup id="possiblePasswords" label="PossiblePasswords" icon={random}>
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

export default connect(possibleItemsSelector)(PossiblePasswords)
