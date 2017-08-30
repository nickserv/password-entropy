import { toggleGeneric } from '../actions'
import PropTypes from 'prop-types'
import { always, map, path, T } from 'ramda'
import React, { PureComponent } from 'react'
import { Checkbox } from 'react-bootstrap'
import { connect } from 'react-redux'

export class GenericOptions extends PureComponent {
  static toggles = {
    letters: {
      label: 'Letters',
      example: 'a-z',
      possibleItems: 26
    },
    capitalLetters: {
      label: 'Capital Letters',
      example: 'A-Z',
      possibleItems: 26
    },
    numbers: {
      label: 'Numbers',
      example: '0-9',
      possibleItems: 10
    },
    symbols: {
      label: 'Symbols',
      example: '!@#$%^&*',
      possibleItems: 8
    }
  }

  static defaultToggles = map(T, GenericOptions.toggles)

  static propTypes = {
    ...map(always(PropTypes.bool.isRequired), GenericOptions.toggles),
    toggleGeneric: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h3>Generic</h3>

        {Object.entries(this.constructor.toggles)
               .map(([name, { label, example }]) => (
                 <Checkbox key={name} name={name} checked={this.props[name]} onChange={this.props.toggleGeneric}>
                   { label } <small>({ example })</small>
                 </Checkbox>
               ))}
      </div>
    )
  }
}

export const mapStateToProps = path(['options', 'generic'])

export default connect(mapStateToProps, { toggleGeneric })(GenericOptions)
