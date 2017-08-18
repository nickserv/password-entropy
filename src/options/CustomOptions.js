import FormGroup from '../ui/FormGroup'
import PropTypes from 'prop-types'
import { pick, pipe, prop } from 'ramda'
import React, { PureComponent } from 'react'
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
          <input name="possibleItems" value={this.props.possibleItems} onChange={this.props.onChange} type="number" min="1" required/>
        </FormGroup>
      </div>
    )
  }
}

export const mapStateToProps = pipe(prop('options'), pick(['custom']))

export const mapDispatchToProps = {
  onChange: possibleItems => ({
    type: 'SET_CUSTOM_POSSIBLE_ITEMS',
    payload: parseInt(possibleItems, 10)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomOptions)
