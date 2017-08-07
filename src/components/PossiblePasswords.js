import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { ProgressBar } from 'react-bootstrap'

export default class PossiblePasswords extends PureComponent {
  static entropyTips = [
    {
      minimum: 0,
      strength: 'Very Weak',
      style: 'danger'
    },
    {
      minimum: 32,
      strength: 'Weak',
      style: 'warning'
    },
    {
      minimum: 64,
      strength: 'Strong',
      style: 'info'
    },
    {
      minimum: 128,
      strength: 'Very Strong',
      style: 'success'
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
    const entropyTip = this.constructor.entropyTips
                         .reduce((memo, tip) => entropyBits >= tip.minimum ? tip : memo)

    return (
      <dl className="dl-horizontal">
        <dt>Possible Passwords</dt>
        <dd>{approximatePrefix}{possiblePasswords.toLocaleString()}</dd>
        <dt>Entropy</dt>
        <dd><ProgressBar bsStyle={entropyTip.style} max={128} now={entropyBits} label={`${entropyBits.toFixed(2)} bits (${entropyTip.strength})`}/></dd>
      </dl>
    )
  }
}
