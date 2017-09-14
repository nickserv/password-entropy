import TextField from 'material-ui/TextField'
import CompareArrows from 'material-ui-icons/CompareArrows'
import Info from 'material-ui-icons/Info'
import Lock from 'material-ui-icons/Lock'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { selector, setLength } from '../reducers/length'
import Options from './Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1><Lock /> Password Entropy</h1>

      <p>A simple entropy calculator for evaluating password security.</p>

      <form>
        <h2><Info /> Results</h2>
        <PossiblePasswords />

        <TextField label={<div><CompareArrows /> Length</div>} value={length} onChange={setLength} type="number" min="0" required />

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
