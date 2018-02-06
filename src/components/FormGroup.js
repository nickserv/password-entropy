import Icon from '@fortawesome/react-fontawesome'
import camelCase from 'lodash/camelCase'
import PropTypes from 'prop-types'
import React from 'react'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import BootstrapFormGroup from 'react-bootstrap/lib/FormGroup'

export default function FormGroup({ children, label, icon }) {
  return (
    <BootstrapFormGroup controlId={camelCase(label)}>
      <ControlLabel><Icon icon={icon} /> {label}</ControlLabel>
      {children}
    </BootstrapFormGroup>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.array, PropTypes.string].map(type => type.isRequired)
  ).isRequired
}
