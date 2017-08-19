import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import FormGroup from '../ui/FormGroup'
import GenericOptions from '../options/GenericOptions'
import PossiblePasswords from './PossiblePasswords'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React, { PureComponent } from 'react'
import { Form, PageHeader, Tab, Tabs } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

export class PasswordEntropy extends PureComponent {
  static options = [
    {
      Component: DicewareOptions,
      icon: 'book'
    },
    {
      Component: CustomOptions,
      icon: 'question-circle'
    },
    {
      Component: GenericOptions,
      icon: 'check-square'
    }
  ]

  static propTypes = {
    length: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    optionsIndex: PropTypes.number.isRequired
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
            <input value={this.props.length} onChange={this.props.onChange} type="number" min="1" required/>
          </FormGroup>

          <h2><Icon name="cog"/> Options</h2>

          <Tabs activeKey={this.props.optionsIndex} onSelect={this.props.onSelect} id="options">
            {this.constructor.options.map(({ Component, icon }, index) => (
              <Tab key={Component.shortName} eventKey={index} title={<div><Icon name={icon}/> {Component.shortName}</div>}>
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

export const mapStateToProps = pick(['length', 'optionsIndex'])

export const mapDispatchToProps = {
  onChange: ({ target: { value } }) => ({
    type: 'SET_LENGTH',
    payload: parseInt(value, 10)
  }),
  onSelect: index => ({
    type: 'SET_OPTIONS_INDEX',
    payload: index
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEntropy)
