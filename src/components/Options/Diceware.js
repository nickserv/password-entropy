import { TextField } from 'material-ui'
import { ImageEdit } from 'material-ui/svg-icons'
import React from 'react'

import { dicewareWords } from '../../reducers/possibleItemsSelector'

export default function DicewareOptions() {
  return (
    <TextField
      disabled
      floatingLabelText={<div><ImageEdit /> Possible Items</div>}
      value={dicewareWords}
    />
  )
}
