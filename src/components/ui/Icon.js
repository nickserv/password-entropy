import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Icon extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render () {
    return <span className={`fa fa-${this.props.name}`} aria-hidden="true"/>
  }
}
