import { faList, faRandom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  FormGroup,
  FormText,
  Label,
  Progress,
} from 'reactstrap'

export default function PossiblePasswords({
  possiblePasswords,
  approximate,
  entropyBits,
  entropyTip: { strength },
}) {
  return (
    <Card>
      <CardBody>
        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faList} /> Entropy
          </Label>

          <FormText>
            <Progress max={128} value={entropyBits}>
              {entropyBits.toFixed(2)} bits ({strength})
            </Progress>
          </FormText>
        </FormGroup>

        <FormGroup>
          <Label>
            <FontAwesomeIcon icon={faRandom} /> Possible Passwords
          </Label>

          <FormText>
            {approximate && '~ '} {possiblePasswords}
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
    style: PropTypes.string.isRequired,
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired,
}
