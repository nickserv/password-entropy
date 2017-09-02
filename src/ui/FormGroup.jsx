import PropTypes from 'prop-types'
import React from 'react'
import { ControlLabel, FormGroup as BootstrapFormGroup } from 'react-bootstrap'
import Icon from 'react-fa'

export default function FormGroup({ children, id, label, icon }) {
  return (
    <BootstrapFormGroup controlId={id}>
      <ControlLabel><Icon name={icon} /> {label}</ControlLabel>
      {children}
    </BootstrapFormGroup>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
