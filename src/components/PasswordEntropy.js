import { TextField } from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'

import Options from './Options'
import PossiblePasswordsContainer from './PossiblePasswordsContainer'

export default function PasswordEntropy({
  length,
  onCustom,
  onGeneric,
  onLength,
  onOptionsKey,
  options,
  optionsKey
}) {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Password Entropy</h1>

      <p>A simple entropy calculator for evaluating password security.</p>

      <form>
        <h2>Results</h2>
        <PossiblePasswordsContainer
          length={length}
          options={options}
          optionsKey={optionsKey}
        />

        <TextField
          label="Length"
          value={length}
          onChange={onLength}
          type="number"
          min="0"
          required
        />

        <Options
          options={options}
          optionsKey={optionsKey}
          onCustom={onCustom}
          onGeneric={onGeneric}
          onOptionsKey={onOptionsKey}
        />
      </form>
    </div>
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
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
