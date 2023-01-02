import React, { Component } from 'react'
import PasswordEntropy from './PasswordEntropy'

export default class PasswordEntropyContainer extends Component {
  state = {
    length: 12,
    options: {
      Custom: 0,
      Generic: {
        Letters: true,
        'Capital Letters': true,
        Numbers: true,
        Symbols: true,
      },
    },
    optionsKey: 'Generic',
  }

  handleCustom = ({ target: { value } }) =>
    this.setState(({ options }) => ({
      options: { ...options, Custom: parseInt(value, 10) },
    }))

  handleGeneric = ({ target: { checked, name } }) =>
    this.setState(({ options: { Custom, Generic } }) => ({
      options: { Custom, Generic: { ...Generic, [name]: checked } },
    }))

  handleLength = ({ target: { value } }) =>
    this.setState({ length: parseInt(value, 10) })

  handleOptionsKey = (optionsKey) => this.setState({ optionsKey })

  render() {
    const { length, options, optionsKey } = this.state

    return (
      <PasswordEntropy
        length={length}
        onCustom={this.handleCustom}
        onGeneric={this.handleGeneric}
        onLength={this.handleLength}
        onOptionsKey={this.handleOptionsKey}
        options={options}
        optionsKey={optionsKey}
      />
    )
  }
}
