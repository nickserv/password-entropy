import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'

import FormGroup from '../ui/FormGroup'

export const dicewareWords = 7776

export default function DicewareOptions() {
  return (
    <FormGroup label="Possible Items" icon="question-circle">
      <FormControl.Static>{dicewareWords}</FormControl.Static>
    </FormGroup>
  )
}
