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
      <Label>
        <Icon icon={faQuestionCircle} /> Possible Items
        <Input
          value={possibleItems}
          onChange={setCustom}
          type="number"
          min="0"
          required
        />
      </Label>
    </FormGroup>
  )
}

Custom.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export default connect(selector, { setCustom })(Custom)
