import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Input, FormGroup, Label } from 'reactstrap'

export const toggles = {
  letters: 'a-z',
  capitalLetters: 'A-Z',
  numbers: '0-9',
  symbols: '!@#$%^&*'
}

export default function Generic(props) {
  return (
    <Fragment>
      {Object.entries(toggles).map(([name, example]) => (
        <FormGroup key={name} check>
          <Label check>
            <Input
              type="checkbox"
              name={name}
              checked={props[name]}
              onChange={props.onGeneric}
            />
            {startCase(name)} <small>({example})</small>
          </Label>
        </FormGroup>
      ))}
    </Fragment>
  )
}

Generic.propTypes = {
  capitalLetters: PropTypes.bool.isRequired,
  letters: PropTypes.bool.isRequired,
  numbers: PropTypes.bool.isRequired,
  onGeneric: PropTypes.func.isRequired,
  symbols: PropTypes.bool.isRequired
}
