import FormGroup from '../ui/FormGroup'
import React from 'react'
import { FormControl } from 'react-bootstrap'

export const dicewareWords = 7776

export default function DicewareOptions () {
  return (
    <FormGroup id="diceware" label="Possible Items" icon="question-circle">
      <FormControl.Static>{dicewareWords}</FormControl.Static>
    </FormGroup>
  )
}
