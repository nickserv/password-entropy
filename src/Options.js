import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class Options extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    possiblePasswords: PropTypes.func.isRequired
  }

  componentDidMount = this.change
  componentDidUpdate = this.change

  change () {
    this.props.onChange(this.props.possiblePasswords())
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
