import Icon from '@fortawesome/react-fontawesome'
import camelCase from 'lodash/camelCase'
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup as BootstrapFormGroup, Label } from 'reactstrap'

export default function FormGroup({ children, label, icon }) {
  return (
    <BootstrapFormGroup>
      <Label for={camelCase(label)}><Icon icon={icon} /> {label}</Label>
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
