import TextField from 'material-ui/TextField'
import Edit from 'material-ui/svg-icons/image/edit'
import React from 'react'

import { dicewareWords } from '../../reducers/possibleItemsSelector'

export default function Diceware() {
  return (
    <TextField
      disabled
      floatingLabelText={<div><Edit /> Possible Items</div>}
      value={dicewareWords}
    />
  )
}
