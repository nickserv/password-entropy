import Options from './Options'
import React, { Component } from 'react'

export default class DicewareOptions extends Component {
  static propTypes = Options.sharedPropTypes
  static shortName = 'Diceware'

  possiblePasswords = () => 7776

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Diceware</h3>
      </Options>
    )
  }
}
