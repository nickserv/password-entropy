import CustomOptions from './CustomOptions'
import DicewareOptions from './DicewareOptions'
import FormGroup from './FormGroup'
import GenericOptions from './GenericOptions'
import handleChange from '../handleChange'
import Icon from './Icon'
import PossiblePasswords from './PossiblePasswords'
import React, { PureComponent } from 'react'
import { Form, PageHeader } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default class PasswordEntropy extends PureComponent {
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

  handleChange = handleChange.bind(this)
  handlePossibleItemsChange = possibleItems => this.setState({ possibleItems })
  state = {
    length: 6
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
            <input name="length" value={this.state.length} onChange={this.handleChange} type="number" min="1" required/>
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
                <Component onChange={this.handlePossibleItemsChange}/>
              </TabPanel>
            ))}
          </Tabs>

          <FormGroup id="results" label="Results" icon="info-circle">
            <PossiblePasswords {...this.state}/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
