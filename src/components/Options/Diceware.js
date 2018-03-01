import questionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'
import React from 'react'
import { FormText } from 'reactstrap'

import FormGroup from '../FormGroup'
import { dicewareWords } from '../../reducers/possibleItemsSelector'

export default function Diceware() {
  return (
    <FormGroup label="Possible Items" icon={questionCircle}>
      <FormText>{dicewareWords}</FormText>
    </FormGroup>
  )
}
