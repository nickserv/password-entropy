import TextField from 'material-ui/TextField'
import Edit from 'material-ui-icons/Edit'
import PropTypes from 'prop-types'
import React from 'react'

export default function Custom({ custom, onCustom }) {
  return (
    <TextField
      label={
        <div>
          <Edit /> Possible Items
        </div>
      }
      value={custom}
      onChange={onCustom}
      type="number"
      min="0"
      required
    />
  )
}

Custom.propTypes = {
  custom: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired
}
