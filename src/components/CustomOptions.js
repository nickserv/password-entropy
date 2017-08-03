import handleChange from '../handleChange'
import Options from './Options'
import React, { Component } from 'react'

export default class CustomOptions extends Component {
  static propTypes = Options.sharedPropTypes
  static shortName = 'Custom'

  state = {
    possibleItems: 1
  }

  handleChange = handleChange.bind(this)
  possiblePasswords = () => this.state.possibleItems

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Custom</h3>
        <label>
          <h4>Possible Items</h4>
          <input name="possibleItems" value={this.state.possibleItems} onChange={this.handleChange} type="number" min="1" required/>
        </label>
      </Options>
    )
  }
}
