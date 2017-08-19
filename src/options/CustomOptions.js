import FormGroup from '../ui/FormGroup'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import React, { PureComponent } from 'react'
import { FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'

export class CustomOptions extends PureComponent {
  static shortName = 'Custom'

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    possibleItems: PropTypes.number.isRequired
  }

  render () {
    return (
      <div>
        <h3>Custom</h3>

        <FormGroup id="possibleItems" label="Possible Items" icon="question-circle">
          <FormControl value={this.props.possibleItems} onChange={this.props.onChange} type="number" min="0" required/>
        </FormGroup>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  possibleItems: path(['options', 'custom'], state)
})

export const mapDispatchToProps = {
  onChange: ({ target: { value }}) => ({
    type: 'SET_CUSTOM',
    payload: parseInt(value, 10)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomOptions)
