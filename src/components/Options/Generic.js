import startCase from 'lodash/startCase'
import Checkbox from 'material-ui/Checkbox'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import always from 'ramda/src/always'
import map from 'ramda/src/map'
import React from 'react'
import { connect } from 'react-redux'

import { selector, toggleGeneric, toggles } from '../../reducers/generic'

export function Generic(props) {
  return (
    <FormGroup>
      {entries(toggles).map(([name, { example }]) => (
        <FormControlLabel
          key={name}
          control={<Checkbox name={name} checked={props[name]} onChange={props.toggleGeneric} />}
          label={<span>{ startCase(name) } <small>({ example })</small></span>}
        />
      ))}
    </FormGroup>
  )
}

Generic.propTypes = {
  ...map(always(PropTypes.bool.isRequired), toggles),
  toggleGeneric: PropTypes.func.isRequired
}

export default connect(selector, { toggleGeneric })(Generic)
