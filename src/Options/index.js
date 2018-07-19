import { Card, CardContent, TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import Custom from './Custom'
import Generic from './Generic'

export default function Options({
  length,
  onCustom,
  onGeneric,
  onLength,
  options,
  optionsKey
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="title" gutterBottom>
          Options
        </Typography>

        <TextField
          label="Number of Items"
          value={length}
          onChange={onLength}
          type="number"
          min="0"
          autoFocus
          fullWidth
        />

        {
          {
            Generic: (
              <Generic onGeneric={onGeneric} toggles={options.Generic} />
            ),
            Diceware: null,
            Custom: <Custom custom={options.Custom} onCustom={onCustom} />
          }[optionsKey]
        }
      </CardContent>
    </Card>
  )
}

Options.propTypes = {
  length: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
  onLength: PropTypes.func.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      'Lowercase Letters': PropTypes.bool.isRequired,
      'Uppercase Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
