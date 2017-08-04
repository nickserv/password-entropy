import CustomOptions from './CustomOptions'
import DicewareOptions from './DicewareOptions'
import GenericOptions from './GenericOptions'
import handleChange from '../handleChange'
import PossiblePasswords from './PossiblePasswords'
import React, { PureComponent } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default class PasswordEntropy extends PureComponent {
  static options = [
    DicewareOptions,
    CustomOptions,
    GenericOptions
  ]

  handleChange = handleChange.bind(this)
  handlePossibleItemsChange = possibleItems => this.setState({ possibleItems })
  state = {
    length: 6
  }

  render () {
    return (
      <form>
        <h1>Password Entropy</h1>

        <label>
          <h2>Length</h2>
          <input name="length" value={this.state.length} onChange={this.handleChange} type="number" min="1" required/>
        </label>

        <h2>Options</h2>

        <Tabs>
          <TabList>
            {this.constructor.options.map(({ shortName }) => (
              <Tab key={shortName}>{shortName}</Tab>
            ))}
          </TabList>

          {this.constructor.options.map(Component => (
            <TabPanel key={Component.shortName}>
              <Component onChange={this.handlePossibleItemsChange}/>
            </TabPanel>
          ))}
        </Tabs>

        <PossiblePasswords {...this.state}/>
      </form>
    )
  }
}
