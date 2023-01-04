import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FormGroup, FormText, Label } from 'reactstrap'

import { dicewareWords } from '../PossiblePasswordsContainer'

export default function Diceware() {
  return (
    <FormGroup>
      <Label>
        <FontAwesomeIcon icon={faQuestionCircle} /> Possible Items
      </Label>

      <FormText>{dicewareWords}</FormText>
    </FormGroup>
  )
}
