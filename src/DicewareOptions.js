import Options from './Options'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class DicewareOptions extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  possiblePasswords = () => 7776

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Diceware</h3>
      </Options>
    )
  }
}
