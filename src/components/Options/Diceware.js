import TextField from 'material-ui/TextField'
import Edit from 'material-ui-icons/Edit'
import React from 'react'

import { dicewareWords } from '../PossiblePasswordsContainer'

export default function Diceware() {
  return (
    <TextField
      disabled
      label={
        <div>
          <Edit /> Possible Items
        </div>
      }
      value={dicewareWords}
    />
  )
}
