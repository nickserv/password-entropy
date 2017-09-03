import camelCase from 'lodash/camelCase'
import PropTypes from 'prop-types'
import React from 'react'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import BootstrapFormGroup from 'react-bootstrap/lib/FormGroup'
import Icon from 'react-fa'

export default function FormGroup({ children, label, icon }) {
  return (
    <BootstrapFormGroup controlId={camelCase(label)}>
      <ControlLabel><Icon name={icon} /> {label}</ControlLabel>
      {children}
    </BootstrapFormGroup>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
