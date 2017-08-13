import FormGroup from '../ui/FormGroup'
import Options from './Options'
import React, { PureComponent } from 'react'
import { handleChange } from '../util'

export default class CustomOptions extends PureComponent {
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

        <FormGroup id="possibleItems" label="Possible Items" icon="question-circle">
          <input name="possibleItems" value={this.state.possibleItems} onChange={this.handleChange} type="number" min="1" required/>
        </FormGroup>
      </Options>
    )
  }
}
