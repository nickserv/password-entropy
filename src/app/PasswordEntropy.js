import PropTypes from 'prop-types'
import pick from 'ramda/src/pick'
import React from 'react'
import { FormControl, PageHeader } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

import { setLength } from '../actions'
import FormGroup from '../ui/FormGroup'
import Options from '../options/Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div>
      <PageHeader>
        <Icon name="lock" /> Password Entropy
        <br />
        <small>A simple entropy calculator for evaluating password security.</small>
      </PageHeader>

      <form>
        <FormGroup id="results" label="Results" icon="info-circle">
          <PossiblePasswords />
        </FormGroup>

        <FormGroup id="length" label="Length" icon="arrows-h">
          <FormControl value={length} onChange={setLength} type="number" min="0" required />
        </FormGroup>

        <Options />
      </form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export const mapStateToProps = pick(['length'])

export default connect(mapStateToProps, { setLength })(PasswordEntropy)
