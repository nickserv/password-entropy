import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import React from 'react'
import { FormGroup, FormText, Label } from 'reactstrap'

import { dicewareWords } from '../../reducers/possibleItemsSelector'

export default function Diceware() {
  return (
    <FormGroup>
      <Label>
        <Icon icon={faQuestionCircle} /> Possible Items
      </Label>

      <FormText>{dicewareWords}</FormText>
    </FormGroup>
  )
}
