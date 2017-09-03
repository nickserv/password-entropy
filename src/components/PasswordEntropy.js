import PropTypes from 'prop-types'
import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import Icon from 'react-fa'
import { connect } from 'react-redux'

import FormGroup from './FormGroup'
import { selector, setLength } from '../reducers/length'
import Options from './Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div>
      <PageHeader>
        <Icon name="lock" /> Password Entropy
        <br />
        <small>A simple entropy calculator for evaluating password security.</small>
      </PageHeader>

      <form>
        <FormGroup label="Results" icon="info-circle">
          <PossiblePasswords />
        </FormGroup>

        <FormGroup label="Length" icon="arrows-h">
          <FormControl value={length} onChange={setLength} type="number" min="0" required />
        </FormGroup>

        <Options />
      </form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export default connect(selector, { setLength })(PasswordEntropy)
