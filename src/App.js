import CustomOptions from './CustomOptions'
import DicewareOptions from './DicewareOptions'
import GenericOptions from './GenericOptions'
import React, { PureComponent } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default class App extends PureComponent {
  state = {
    length: 6
  }

  handleLengthChange = event => this.setState({ length: parseInt(event.target.value, 10) })
  handlePossibleItemsChange = possibleItems => this.setState({ possibleItems })

  render () {
    const possiblePasswords = (this.state.possibleItems || 1) ** this.state.length
    const approximatePrefix = possiblePasswords > Number.MAX_SAFE_INTEGER && '~ '

    return (
      <form>
        <h1>Password Entropy</h1>

        <label>
          <h2>Length</h2>
          <input value={this.state.length} onChange={this.handleLengthChange} type="number" min="1" required/>
        </label>

        <h2>Options</h2>

        <Tabs>
          <TabList>
            <Tab>Diceware</Tab>
            <Tab>Custom</Tab>
            <Tab>Generic</Tab>
          </TabList>

          <TabPanel>
            <DicewareOptions onChange={this.handlePossibleItemsChange}/>
          </TabPanel>

          <TabPanel>
            <CustomOptions onChange={this.handlePossibleItemsChange}/>
          </TabPanel>

          <TabPanel>
            <GenericOptions onChange={this.handlePossibleItemsChange}/>
          </TabPanel>
        </Tabs>

        <h2>Possible Passwords</h2>
        {approximatePrefix}{possiblePasswords.toLocaleString()} ({approximatePrefix}{Math.log2(possiblePasswords).toFixed(2)} bits of entropy)
      </form>
    )
  }
}
