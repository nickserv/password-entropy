import Options from './Options'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class CustomOptions extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  state = {
    wordlistLength: 7776
  }

  handleChange = event => this.setState({ wordlistLength: parseInt(event.target.value, 10) })
  possiblePasswords = () => this.state.wordlistLength

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Diceware</h3>
        <label>
          <h4>Wordlist Length</h4>
          <input value={this.state.wordlistLength} onChange={this.handleChange} type="number" min="1" required/>
        </label>
      </Options>
    )
  }
}
