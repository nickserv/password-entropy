import Icon from './Icon'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Col, ControlLabel, FormGroup as BootstrapFormGroup } from 'react-bootstrap'

export default class FormGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render () {
    const { children, id, label, icon } = this.props

    return (
      <BootstrapFormGroup controlId={id}>
        <Col sm={2}>
          <ControlLabel><Icon name={icon}/> {label}</ControlLabel>
        </Col>
        <Col sm={10}>{children}</Col>
      </BootstrapFormGroup>
    )
  }
}
