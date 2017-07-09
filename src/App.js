import React, { Component } from 'react'

export default class App extends Component {
  state = {
    listSize: 7776,
    passwordSize: 6
  }

  static bits (size) {
    return Math.floor(Math.log2(size)) + 1
  }

  numberSetter (key) {
    return (event) => this.setState({ [key]: parseInt(event.target.value, 10) })
  }

  render () {
    const size = this.state.listSize ** this.state.passwordSize
    return <div>
      <h1>Password Entropy</h1>
      <h2>Diceware</h2>
      <p>
        <input value={this.state.passwordSize} onChange={this.numberSetter('passwordSize')} type="number" min="1" required/>
        words from a set of
        <input value={this.state.listSize} onChange={this.numberSetter('listSize')} type="number" min="1" required/>
      </p>
      <p>Roughly {size.toPrecision(4)} passwords ({this.constructor.bits(size)} bits of entropy)</p>
    </div>
  }
}
