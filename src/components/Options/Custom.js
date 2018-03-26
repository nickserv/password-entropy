import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

export default function Custom({ custom, onCustom }) {
  return (
    <FormGroup>
      <Label>
        <Icon icon={faQuestionCircle} /> Possible Items
        <Input
          value={custom}
          onChange={onCustom}
          type="number"
          min="0"
          required
        />
      </Label>
    </FormGroup>
  )
}

Custom.propTypes = {
  custom: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired
}
