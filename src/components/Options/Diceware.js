import { TextField } from 'material-ui'
import React from 'react'

import { dicewareWords } from '../PossiblePasswordsContainer'

export default function Diceware() {
  return <TextField disabled label="Possible Items" value={dicewareWords} />
}
