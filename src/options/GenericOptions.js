import { Checkbox } from 'material-ui'
import PropTypes from 'prop-types'
import { always, map, path, T } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { toggleGeneric } from '../actions'

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

export function GenericOptions(props) {
  return (
    <div>
      {Object.entries(toggles).map(([name, { label, example }]) => (
        <Checkbox
          key={name}
          name={name}
          label={<div>{ label } <small>({ example })</small></div>}
          checked={props[name]}
          onCheck={props.toggleGeneric}
        />
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
