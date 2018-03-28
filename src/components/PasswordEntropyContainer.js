import React, { Component } from 'react'

import PasswordEntropy from './PasswordEntropy'

export default class PasswordEntropyContainer extends Component {
  state = {
    length: 12,
    options: {
      custom: 0,
      generic: {
        letters: true,
        capitalLetters: true,
        numbers: true,
        symbols: true
      }
    },
    optionsKey: 'generic'
  }

  handleCustom = ({ target: { value } }) =>
    this.setState(({ options }) => ({
      options: { ...options, custom: parseInt(value, 10) }
    }))

  handleGeneric = ({ target: { checked, name } }) =>
    this.setState(({ options: { custom, generic } }) => ({
      options: { custom, generic: { ...generic, [name]: checked } }
    }))

  handleLength = ({ target: { value } }) =>
    this.setState({ length: parseInt(value, 10) })

  handleOptionsKey = (_, optionsKey) => this.setState({ optionsKey })

  render() {
    return (
      <PasswordEntropy
        length={this.state.length}
        onCustom={this.handleCustom}
        onGeneric={this.handleGeneric}
        onLength={this.handleLength}
        onOptionsKey={this.handleOptionsKey}
        options={this.state.options}
        optionsKey={this.state.optionsKey}
      />
    )
  }
}
