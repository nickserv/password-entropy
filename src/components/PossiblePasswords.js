import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class PossiblePasswords extends Component {
  static propTypes = {
    length: PropTypes.number.isRequired,
    possibleItems: PropTypes.number
  }

  render () {
    const possiblePasswords = (this.props.possibleItems || 1) ** this.props.length
    const approximatePrefix = possiblePasswords > Number.MAX_SAFE_INTEGER && '~ '
    const entropyBits = Math.log2(possiblePasswords).toFixed(2)

    return (
      <div>
        <h2>Possible Passwords</h2>
        {approximatePrefix}{possiblePasswords.toLocaleString()}
        ({approximatePrefix}{entropyBits} bits of entropy)
      </div>
    )
  }
}
