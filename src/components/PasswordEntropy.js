import arrowsAltH from '@fortawesome/fontawesome-free-solid/faArrowsAltH'
import infoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import lock from '@fortawesome/fontawesome-free-solid/faLock'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import { connect } from 'react-redux'

import FormGroup from './FormGroup'
import { selector, setLength } from '../reducers/length'
import Options from './Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div>
      <PageHeader>
        <Icon icon={lock} /> Password Entropy
        <br />
        <small>A simple entropy calculator for evaluating password security.</small>
      </PageHeader>

      <form>
        <FormGroup label="Results" icon={infoCircle}>
          <PossiblePasswords />
        </FormGroup>

        <FormGroup label="Length" icon={arrowsAltH}>
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
