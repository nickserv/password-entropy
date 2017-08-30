import { setCustom } from '../actions'
import FormGroup from '../ui/FormGroup'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import React from 'react'
import { FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'

export function CustomOptions ({ possibleItems, setCustom }) {
  return (
    <div>
      <h3>Custom</h3>

      <FormGroup id="possibleItems" label="Possible Items" icon="question-circle">
        <FormControl value={possibleItems} onChange={setCustom} type="number" min="0" required/>
      </FormGroup>
    </div>
  )
}

CustomOptions.propTypes = {
  possibleItems: PropTypes.number.isRequired,
  setCustom: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  possibleItems: path(['options', 'custom'], state)
})

export default connect(mapStateToProps, { setCustom })(CustomOptions)
