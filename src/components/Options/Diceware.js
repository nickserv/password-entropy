import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'

import FormGroup from '../FormGroup'
import { dicewareWords } from '../../reducers/possibleItemsSelector'

export default function Diceware() {
  return (
    <FormGroup label="Possible Items" icon="question-circle">
      <FormControl.Static>{dicewareWords}</FormControl.Static>
    </FormGroup>
  )
}
