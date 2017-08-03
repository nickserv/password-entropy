import handleChange from '../handleChange'
import Options from './Options'
import React, { PureComponent } from 'react'

export default class GenericOptions extends PureComponent {
  static propTypes = Options.sharedPropTypes
  static shortName = 'Generic'

  static stateToPossibilities =  {
    letters: 26,
    capitalLetters: 26,
    numbers: 10,
    symbols: 8
  }

  state = {
    letters: true,
    capitalLetters: true,
    numbers: true,
    symbols: true
  }

  handleChange = handleChange.bind(this)

  possiblePasswords = () => {
    const keys = Object.entries(this.state)
          .filter(([key, value]) => value)
          .map(([key, value]) => key)

    return keys.reduce((memo, key) => memo + this.constructor.stateToPossibilities[key], 0)
  }

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Generic</h3>
        <label>
          <input type="checkbox" name="letters" checked={this.state.letters} onChange={this.handleChange}/>
          Letters
        </label>

        <label>
          <input type="checkbox" name="capitalLetters" checked={this.state.capitalLetters} onChange={this.handleChange}/>
          Capital Letters
        </label>

        <label>
          <input type="checkbox" name="numbers" checked={this.state.numbers} onChange={this.handleChange}/>
          Numbers
        </label>

        <label>
          <input type="checkbox" name="symbols" checked={this.state.symbols} onChange={this.handleChange}/>
          Symbols
        </label>
      </Options>
    )
  }
}
