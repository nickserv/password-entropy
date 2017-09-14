import TextField from 'material-ui/TextField'
import Edit from 'material-ui-icons/Edit'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { selector, setCustom } from '../../reducers/custom'

export function Custom({ possibleItems, setCustom }) {
  return (
    <TextField label={<div><Edit /> Possible Items</div>} value={possibleItems} onChange={setCustom} type="number" min="0" required />
  )
}

Custom.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export default connect(selector, { setCustom })(Custom)
