import PropTypes from 'prop-types'
import { always, map } from 'ramda'
import React from 'react'
import { Checkbox } from 'react-bootstrap'
import { connect } from 'react-redux'

import { selector, toggleGeneric, toggles } from '../../reducers/generic'

export function Generic(props) {
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

Generic.propTypes = {
  ...map(always(PropTypes.bool.isRequired), toggles),
  toggleGeneric: PropTypes.func.isRequired
}

export default connect(selector, { toggleGeneric })(Generic)
