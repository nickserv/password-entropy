import arrowsAltH from '@fortawesome/fontawesome-free-solid/faArrowsAltH'
import infoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import lock from '@fortawesome/fontawesome-free-solid/faLock'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, Input } from 'reactstrap'

import FormGroup from './FormGroup'
import { selector, setLength } from '../reducers/length'
import Options from './Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <Container>
      <h1 className="mt-3"><Icon icon={lock} /> Password Entropy</h1>
      <p className="text-muted">A simple entropy calculator for evaluating password security.</p>

      <Form>
        <FormGroup label="Results" icon={infoCircle}>
          <PossiblePasswords />
        </FormGroup>

        <FormGroup label="Length" icon={arrowsAltH}>
          <Input id="length" value={length} onChange={setLength} type="number" min="0" required />
        </FormGroup>

        <Options />
      </Form>
    </Container>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export default connect(selector, { setLength })(PasswordEntropy)
