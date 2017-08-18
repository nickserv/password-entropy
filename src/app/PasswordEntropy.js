import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import FormGroup from '../ui/FormGroup'
import GenericOptions from '../options/GenericOptions'
import PossiblePasswords from './PossiblePasswords'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React, { PureComponent } from 'react'
import { Form, PageHeader } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

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
    onChange: PropTypes.func.isRequired
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
            <input name="length" value={this.props.length} onChange={this.props.onChange} type="number" min="1" required/>
          </FormGroup>

          <h2><Icon name="cog"/> Options</h2>

          <Tabs>
            <TabList>
              {this.constructor.options.map(({ Component: { shortName }, icon }) => (
                <Tab key={shortName}><Icon name={icon}/> {shortName}</Tab>
              ))}
            </TabList>
            {this.constructor.options.map(({ Component }) => (
              <TabPanel key={Component.shortName}>
                <Component/>
              </TabPanel>
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

export const mapStateToProps = pick(['length'])

export const mapDispatchToProps = {
  onChange: length => ({
    type: 'SET_LENGTH',
    payload: parseInt(length, 10)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEntropy)
