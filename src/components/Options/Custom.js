import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, Input, Label } from 'reactstrap'

import { selector, setCustom } from '../../reducers/custom'

export function Custom({ possibleItems, setCustom }) {
  return (
    <FormGroup>
      <Label for="possibleItems">
        <Icon icon={faQuestionCircle} /> Possible Items
      </Label>

      <Input
        id="possibleItems"
        value={possibleItems}
        onChange={setCustom}
        type="number"
        min="0"
        required
      />
    </FormGroup>
  )
}

Custom.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export default connect(selector, { setCustom })(Custom)
