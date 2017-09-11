import startCase from 'lodash/startCase'
import Checkbox from 'material-ui/Checkbox'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import always from 'ramda/src/always'
import map from 'ramda/src/map'
import React from 'react'
import { connect } from 'react-redux'

import { selector, toggleGeneric, toggles } from '../../reducers/generic'

export function Generic(props) {
  return (
    <div>
      {entries(toggles).map(([name, { example }]) => (
        <Checkbox
          key={name}
          name={name}
          label={<div>{ startCase(name) } <small>({ example })</small></div>}
          checked={props[name]}
          onCheck={props.toggleGeneric}
        />
      ))}
    </div>
  )
}

Generic.propTypes = {
  ...map(always(PropTypes.bool.isRequired), toggles),
  toggleGeneric: PropTypes.func.isRequired
}

export default connect(selector, { toggleGeneric })(Generic)
