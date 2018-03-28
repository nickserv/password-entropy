import Checkbox from 'material-ui/Checkbox'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import PropTypes from 'prop-types'
import React from 'react'

export const toggles = {
  letters: 'a-z',
  capitalLetters: 'A-Z',
  numbers: '0-9',
  symbols: '!@#$%^&*'
}

export default function Generic(props) {
  return (
    <FormGroup>
      {Object.entries(toggles).map(([name, example]) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              name={name}
              checked={props[name]}
              onChange={props.onGeneric}
            />
          }
          label={
            <span>
              {name} <small>({example})</small>
            </span>
          }
        />
      ))}
    </FormGroup>
  )
}

Generic.propTypes = {
  capitalLetters: PropTypes.bool.isRequired,
  letters: PropTypes.bool.isRequired,
  numbers: PropTypes.bool.isRequired,
  onGeneric: PropTypes.func.isRequired,
  symbols: PropTypes.bool.isRequired
}
