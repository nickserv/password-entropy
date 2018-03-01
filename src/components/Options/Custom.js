import questionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'

import { selector, setCustom } from '../../reducers/custom'
import FormGroup from '../FormGroup'

export function Custom({ possibleItems, setCustom }) {
  return (
    <FormGroup label="Possible Items" icon={questionCircle}>
      <Input id="possibleItems" value={possibleItems} onChange={setCustom} type="number" min="0" required />
    </FormGroup>
  )
}

Custom.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export default connect(selector, { setCustom })(Custom)
