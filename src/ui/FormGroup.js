import PropTypes from 'prop-types'
import React from 'react'
import { Col, ControlLabel, FormGroup as BootstrapFormGroup } from 'react-bootstrap'
import Icon from 'react-fa'

export default function FormGroup ({ children, id, label, icon }) {
  return (
    <BootstrapFormGroup controlId={id}>
      <Col sm={2}>
        <ControlLabel><Icon name={icon}/> {label}</ControlLabel>
      </Col>
      <Col sm={10}>{children}</Col>
    </BootstrapFormGroup>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
