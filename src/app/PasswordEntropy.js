import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import FormGroup from '../ui/FormGroup'
import GenericOptions from '../options/GenericOptions'
import PossiblePasswords from './PossiblePasswords'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React, { PureComponent } from 'react'
import { Form, FormControl, PageHeader, Tab, Tabs } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

export class PasswordEntropy extends PureComponent {
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static options = {
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

  static propTypes = {
    length: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    optionsKey: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <PageHeader>
          <Icon name="lock"/> Password Entropy
          <br/>
          <small>A simple entropy calculator for evaluating password security.</small>
        </PageHeader>

        <Form horizontal>
          <FormGroup id="length" label="Length" icon="arrows-h">
            <FormControl value={this.props.length} onChange={this.props.onChange} type="number" min="1" required/>
          </FormGroup>

          <h2><Icon name="cog"/> Options</h2>

          <Tabs activeKey={this.props.optionsKey} onSelect={this.props.onSelect} id="options">
            {Object.entries(this.constructor.options).map(([name, { Component, icon }]) => (
              <Tab key={name} eventKey={name} title={<div><Icon name={icon}/> {this.constructor.capitalize(name)}</div>}>
                <Component/>
              </Tab>
            ))}
          </Tabs>

          <FormGroup id="results" label="Results" icon="info-circle">
            <PossiblePasswords length={this.props.length}/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export const mapStateToProps = pick(['length', 'optionsKey'])

export const mapDispatchToProps = {
  onChange: ({ target: { value } }) => ({
    type: 'SET_LENGTH',
    payload: parseInt(value, 10)
  }),
  onSelect: key => ({
    type: 'SET_OPTIONS_KEY',
    payload: key
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEntropy)
