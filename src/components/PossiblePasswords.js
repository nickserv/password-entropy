import { faList, faRandom } from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Card,
  CardBody,
  FormGroup,
  FormText,
  Label,
  Progress
} from 'reactstrap'

export default function PossiblePasswords({
  possiblePasswords,
  approximate,
  entropyBits,
  entropyTip: { strength, style }
}) {
  return (
    <Card>
      <CardBody>
        <FormGroup>
          <Label>
            <Icon icon={faList} /> Entropy
          </Label>

          <FormText>
            <Progress max={128} value={entropyBits}>
              {entropyBits.toFixed(2)} bits ({strength})
            </Progress>
          </FormText>
        </FormGroup>

        <FormGroup>
          <Label>
            <Icon icon={faRandom} /> PossiblePasswords
          </Label>

          <FormText>
            {approximate && '~ '} {possiblePasswords.toLocaleString()}
          </FormText>
        </FormGroup>
      </CardBody>
    </Card>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired
}
