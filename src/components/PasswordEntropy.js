import TextField from 'material-ui/TextField'
import CompareArrows from 'material-ui-icons/CompareArrows'
import Info from 'material-ui-icons/Info'
import Lock from 'material-ui-icons/Lock'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

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
      <h1>
        <Lock /> Password Entropy
      </h1>

      <p>A simple entropy calculator for evaluating password security.</p>

      <form>
        <h2>
          <Info /> Results
        </h2>
        <PossiblePasswordsContainer
          length={length}
          options={options}
          optionsKey={optionsKey}
        />

        <TextField
          label={
            <Fragment>
              <CompareArrows /> Length
            </Fragment>
          }
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
    custom: PropTypes.number.isRequired,
    generic: PropTypes.shape({
      letters: PropTypes.bool.isRequired,
      capitalLetters: PropTypes.bool.isRequired,
      numbers: PropTypes.bool.isRequired,
      symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
