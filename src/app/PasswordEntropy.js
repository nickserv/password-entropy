import { setLength, setOptionsKey} from '../actions'
import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import FormGroup from '../ui/FormGroup'
import GenericOptions from '../options/GenericOptions'
import PossiblePasswords from './PossiblePasswords'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React from 'react'
import { Form, FormControl, PageHeader, Tab, Tabs } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

const options = {
  diceware: {
    Component: DicewareOptions,
    icon: 'book'
  },
  custom: {
    Component: CustomOptions,
    icon: 'question-circle'
  },
  generic: {
    Component: GenericOptions,
    icon: 'check-square'
  }
}

export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function PasswordEntropy ({ length, optionsKey, setLength, setOptionsKey }) {
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

        <Tabs activeKey={optionsKey} onSelect={setOptionsKey} id="options">
          {Object.entries(options).map(([name, { Component, icon }]) => (
            <Tab key={name} eventKey={name} title={<div><Icon name={icon}/> {capitalize(name)}</div>}>
              <Component/>
            </Tab>
          ))}
        </Tabs>

        <FormGroup id="results" label="Results" icon="info-circle">
          <PossiblePasswords length={length}/>
        </FormGroup>
      </Form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  optionsKey: PropTypes.string.isRequired,
  setLength: PropTypes.func.isRequired,
  setOptionsKey: PropTypes.func.isRequired
}

export const mapStateToProps = pick(['length', 'optionsKey'])

export default connect(mapStateToProps, { setLength, setOptionsKey })(PasswordEntropy)
