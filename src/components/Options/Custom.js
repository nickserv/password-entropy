import TextField from 'material-ui/TextField'
import Edit from 'material-ui-icons/Edit'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

export default function Custom({ custom, onCustom }) {
  return (
    <TextField
      label={
        <Fragment>
          <Edit /> Possible Items
        </Fragment>
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
