import { toggleGeneric } from '../actions'
import PropTypes from 'prop-types'
import { always, map, path, T } from 'ramda'
import React from 'react'
import { Checkbox } from 'react-bootstrap'
import { connect } from 'react-redux'

export const toggles = {
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

export const defaultToggles = map(T, toggles)

export function GenericOptions (props) {
  return (
    <div>
      {Object.entries(toggles).map(([name, { label, example }]) => (
        <Checkbox key={name} name={name} checked={props[name]} onChange={props.toggleGeneric}>
          { label } <small>({ example })</small>
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
