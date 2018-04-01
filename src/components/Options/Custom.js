import { TextField } from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'

export default function Custom({ custom, onCustom }) {
  return (
    <TextField
      label="Possible Items"
      value={custom}
      onChange={onCustom}
      type="number"
      min="0"
    />
  )
}

Custom.propTypes = {
  custom: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired
}
