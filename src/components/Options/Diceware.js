import TextField from 'material-ui/TextField'
import Edit from 'material-ui-icons/Edit'
import React, { Fragment } from 'react'

import { dicewareWords } from '../PossiblePasswordsContainer'

export default function Diceware() {
  return (
    <TextField
      disabled
      label={
        <Fragment>
          <Edit /> Possible Items
        </Fragment>
      }
      value={dicewareWords}
    />
  )
}
