import TextField from 'material-ui/TextField'
import CompareArrows from 'material-ui/svg-icons/action/compare-arrows'
import Info from 'material-ui/svg-icons/action/info'
import Lock from 'material-ui/svg-icons/action/lock'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { selector, setLength } from '../reducers/length'
import Options from './Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div>
      <h1><Lock /> Password Entropy</h1>

      A simple entropy calculator for evaluating password security.

      <form>
        <h2><Info /> Results</h2>
        <PossiblePasswords />

        <TextField floatingLabelText={<div><CompareArrows /> Length</div>} value={length} onChange={setLength} type="number" min="0" required />

        <Options />
      </form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export default connect(selector, { setLength })(PasswordEntropy)
