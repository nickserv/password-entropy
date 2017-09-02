import { TextField } from 'material-ui'
import { ActionCompareArrows, ActionInfo, ActionLock } from 'material-ui/svg-icons'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { setLength } from '../actions'
import Options from '../options/Options'
import PossiblePasswords from './PossiblePasswords'

export function PasswordEntropy({ length, setLength }) {
  return (
    <div>
      <h1>
        <ActionLock /> Password Entropy
        <br />
        <small>A simple entropy calculator for evaluating password security.</small>
      </h1>

      <form>
        <h2><ActionInfo /> Results</h2>
        <PossiblePasswords />

        <TextField floatingLabelText={<div><ActionCompareArrows /> Length</div>} value={length} onChange={setLength} type="number" min="0" required />

        <Options />
      </form>
    </div>
  )
}

PasswordEntropy.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export const mapStateToProps = pick(['length'])

export default connect(mapStateToProps, { setLength })(PasswordEntropy)
