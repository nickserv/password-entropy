import { setLength } from '../actions'
import FormGroup from '../ui/FormGroup'
import Options from '../options/Options'
import PossiblePasswords from './PossiblePasswords'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React from 'react'
import { Form, FormControl, PageHeader } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

export function PasswordEntropy ({ length, setLength }) {
  return (
    <div>
      <PageHeader>
        <Icon name="lock"/> Password Entropy
        <br/>
        <small>A simple entropy calculator for evaluating password security.</small>
      </PageHeader>

      <Form horizontal>
        <FormGroup id="length" label="Length" icon="arrows-h">
          <FormControl value={length} onChange={setLength} type="number" min="1" required/>
        </FormGroup>

        <h2><Icon name="cog"/> Options</h2>
        <Options/>

        <FormGroup id="results" label="Results" icon="info-circle">
          <PossiblePasswords/>
        </FormGroup>
      </Form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
}

export const mapStateToProps = pick(['length'])

export default connect(mapStateToProps, { setLength })(PasswordEntropy)
