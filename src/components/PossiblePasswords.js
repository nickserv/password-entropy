import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class PossiblePasswords extends PureComponent {
  static entropyTips = [
    {
      minimum: 0,
      strength: 'Very Weak'
    },
    {
      minimum: 32,
      strength: 'Weak'
    },
    {
      minimum: 64,
      strength: 'Strong'
    },
    {
      minimum: 128,
      strength: 'Very Strong'
    }
  ]

  static propTypes = {
    length: PropTypes.number.isRequired,
    possibleItems: PropTypes.number
  }

  render () {
    const possiblePasswords = (this.props.possibleItems || 1) ** this.props.length
    const approximatePrefix = possiblePasswords > Number.MAX_SAFE_INTEGER && '~ '
    const entropyBits = Math.log2(possiblePasswords)
    const strength = this.constructor.entropyTips
                         .reduce((memo, tip) => entropyBits >= tip.minimum ? tip : memo)
                         .strength

    return (
      <div>
        <h2>Possible Passwords</h2>
        {approximatePrefix}{possiblePasswords.toLocaleString()} ({strength}, {approximatePrefix}{entropyBits.toFixed(2)} bits of entropy)
      </div>
    )
  }
}
