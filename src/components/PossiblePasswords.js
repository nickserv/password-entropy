import list from '@fortawesome/fontawesome-free-solid/faList'
import random from '@fortawesome/fontawesome-free-solid/faRandom'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, FormText, Progress } from 'reactstrap'

import FormGroup from './FormGroup'
import possibleItemsSelector from '../reducers/possibleItemsSelector'

export function PossiblePasswords({
  possiblePasswords, approximate, entropyBits, entropyTip: { strength, style }
}) {
  return (
    <Card>
      <CardBody>
        <FormGroup label="Entropy" icon={list}>
          <FormText><Progress max={128} value={entropyBits}>{entropyBits.toFixed(2)} bits ({strength})</Progress></FormText>
        </FormGroup>

        <FormGroup id="possiblePasswords" label="PossiblePasswords" icon={random}>
          <FormText>{approximate && '~ '} {possiblePasswords.toLocaleString()}</FormText>
        </FormGroup>
      </CardBody>
    </Card>
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
