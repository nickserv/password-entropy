import startCase from 'lodash/startCase'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import { always, map } from 'ramda'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Input, FormGroup, Label } from 'reactstrap'

import { selector, toggleGeneric, toggles } from '../../reducers/generic'

export function Generic(props) {
  return (
    <Fragment>
      {entries(toggles).map(([name, { example }]) => (
        <FormGroup key={name} check>
          <Label check>
            <Input type="checkbox" name={name} checked={props[name]} onChange={props.toggleGeneric} />{' '}
            {startCase(name)} <small>({example})</small>
          </Label>
        </FormGroup>
      ))}
    </Fragment>
  )
}

Generic.propTypes = {
  ...map(always(PropTypes.bool.isRequired), toggles),
  toggleGeneric: PropTypes.func.isRequired
}

export default connect(selector, { toggleGeneric })(Generic)
