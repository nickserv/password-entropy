import Checkbox from 'material-ui/Checkbox'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export const examples = {
  Letters: 'a-z',
  'Capital Letters': 'A-Z',
  Numbers: '0-9',
  Symbols: '!@#$%^&*'
}

export default function Generic({ onGeneric, toggles }) {
  return (
    <FormGroup>
      {Object.entries(examples).map(([name, example]) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              name={name}
              checked={toggles[name]}
              onChange={onGeneric}
            />
          }
          label={
            <Fragment>
              {name} <small>({example})</small>
            </Fragment>
          }
        />
      ))}
    </FormGroup>
  )
}

Generic.propTypes = {
  onGeneric: PropTypes.func.isRequired,
  toggles: PropTypes.shape({
    'Capital Letters': PropTypes.bool.isRequired,
    Letters: PropTypes.bool.isRequired,
    Numbers: PropTypes.bool.isRequired,
    Symbols: PropTypes.bool.isRequired
  }).isRequired
}
