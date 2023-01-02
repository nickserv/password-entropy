import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Input, FormGroup, Label } from 'reactstrap'

export const examples = {
  Letters: 'a-z',
  'Capital Letters': 'A-Z',
  Numbers: '0-9',
  Symbols: '!@#$%^&*',
}

export default function Generic({ onGeneric, toggles }) {
  return (
    <Fragment>
      {Object.entries(examples).map(([name, example]) => (
        <FormGroup key={name} check>
          <Label check>
            <Input
              type="checkbox"
              name={name}
              checked={toggles[name]}
              onChange={onGeneric}
            />
            {name} <small>({example})</small>
          </Label>
        </FormGroup>
      ))}
    </Fragment>
  )
}

Generic.propTypes = {
  onGeneric: PropTypes.func.isRequired,
  toggles: PropTypes.shape({
    'Capital Letters': PropTypes.bool.isRequired,
    Letters: PropTypes.bool.isRequired,
    Numbers: PropTypes.bool.isRequired,
    Symbols: PropTypes.bool.isRequired,
  }).isRequired,
}
