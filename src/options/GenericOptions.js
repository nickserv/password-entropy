import startCase from 'lodash/startCase'
import PropTypes from 'prop-types'
import always from 'ramda/src/always'
import map from 'ramda/src/map'
import path from 'ramda/src/path'
import T from 'ramda/src/T'
import React from 'react'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import { connect } from 'react-redux'

import { toggleGeneric } from '../actions'

export const toggles = {
  letters: {
    example: 'a-z',
    possibleItems: 26
  },
  capitalLetters: {
    example: 'A-Z',
    possibleItems: 26
  },
  numbers: {
    example: '0-9',
    possibleItems: 10
  },
  symbols: {
    example: '!@#$%^&*',
    possibleItems: 8
  }
}

export const defaultToggles = map(T, toggles)

export function GenericOptions(props) {
  return (
    <div>
      {Object.entries(toggles).map(([name, { example }]) => (
        <Checkbox key={name} name={name} checked={props[name]} onChange={props.toggleGeneric}>
          { startCase(name) } <small>({ example })</small>
        </Checkbox>
      ))}
    </div>
  )
}

GenericOptions.propTypes = {
  ...map(always(PropTypes.bool.isRequired), toggles),
  toggleGeneric: PropTypes.func.isRequired
}

export const mapStateToProps = path(['options', 'generic'])

export default connect(mapStateToProps, { toggleGeneric })(GenericOptions)
