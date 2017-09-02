import { TextField } from 'material-ui'
import React from 'react'
import Icon from 'react-fa'

export const dicewareWords = 7776

export default function DicewareOptions() {
  return (
    <TextField disabled floatingLabelText={<div><Icon name="question-circle" /> Possible Items</div>} value={dicewareWords} />
  )
}
