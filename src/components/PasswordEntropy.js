import { Card, CardContent, Grid, TextField, Typography } from 'material-ui'
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
    <Fragment>
      <Typography variant="headline" gutterBottom>
        Password Entropy
      </Typography>

      <Typography gutterBottom>
        A simple entropy calculator for evaluating password security.
      </Typography>

      <form>
        <Card>
          <CardContent>
            <Typography variant="title" gutterBottom>
              Options
            </Typography>

            <TextField
              label="Length"
              value={length}
              onChange={onLength}
              type="number"
              min="0"
              autoFocus
            />
          </CardContent>

          <Options
            options={options}
            optionsKey={optionsKey}
            onCustom={onCustom}
            onGeneric={onGeneric}
            onOptionsKey={onOptionsKey}
          />
        </Card>

        <PossiblePasswordsContainer
          length={length}
          options={options}
          optionsKey={optionsKey}
        />
      </form>
    </Fragment>
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
