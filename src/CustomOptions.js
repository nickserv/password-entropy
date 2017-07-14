import Options from './Options'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class CustomOptions extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  state = {
    possibleItems: 1
  }

  handleChange = event => this.setState({ possibleItems: parseInt(event.target.value, 10) })
  possiblePasswords = () => this.state.possibleItems

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Custom</h3>
        <label>
          <h4>Possible Items</h4>
          <input value={this.state.possibleItems} onChange={this.handleChange} type="number" min="1" required/>
        </label>
      </Options>
    )
  }
}
