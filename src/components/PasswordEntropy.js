import {
  faArrowsAltH,
  faInfoCircle,
  faLock,
} from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'

import Options from './Options'
import PossiblePasswordsContainer from './PossiblePasswordsContainer'

export default function PasswordEntropy({
  length,
  onCustom,
  onGeneric,
  onLength,
  onOptionsKey,
  options,
  optionsKey,
}) {
  return (
    <Container>
      <h1 className="mt-3">
        <Icon icon={faLock} /> Password Entropy
      </h1>

      <p className="text-muted">
        A simple entropy calculator for evaluating password security.
      </p>

      <Form>
        <FormGroup>
          <Label>
            <Icon icon={faInfoCircle} /> Results
          </Label>

          <PossiblePasswordsContainer
            length={length}
            options={options}
            optionsKey={optionsKey}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <Icon icon={faArrowsAltH} /> Length
            <Input
              value={length}
              onChange={onLength}
              type="number"
              min="0"
              required
            />
          </Label>
        </FormGroup>
        <Options
          options={options}
          optionsKey={optionsKey}
          onCustom={onCustom}
          onGeneric={onGeneric}
          onOptionsKey={onOptionsKey}
        />
      </Form>
    </Container>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
  onLength: PropTypes.func.isRequired,
  onOptionsKey: PropTypes.func.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      Letters: PropTypes.bool.isRequired,
      'Capital Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  optionsKey: PropTypes.string.isRequired,
}
