import { setCustom } from '../actions'
import FormGroup from '../ui/FormGroup'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import React, { PureComponent } from 'react'
import { FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'

export class CustomOptions extends PureComponent {
  static propTypes = {
    possibleItems: PropTypes.number.isRequired,
    setCustom: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h3>Custom</h3>

        <FormGroup id="possibleItems" label="Possible Items" icon="question-circle">
          <FormControl value={this.props.possibleItems} onChange={this.props.setCustom} type="number" min="0" required/>
        </FormGroup>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  possibleItems: path(['options', 'custom'], state)
})

export default connect(mapStateToProps, { setCustom })(CustomOptions)
