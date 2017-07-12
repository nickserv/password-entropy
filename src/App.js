import React, { Component } from 'react'

export default class App extends Component {
  state = {
    length: 6,
    wordlistLength: 7776
  }

  static bits (size) {
    return Math.floor(Math.log2(size)) + 1
  }

  numberSetter (key) {
    return (event) => this.setState({ [key]: parseInt(event.target.value, 10) })
  }

  render () {
    const size = this.state.wordlistLength ** this.state.length
    return (
      <form>
        <h1>Password Entropy</h1>

        <label>
          <h2>Length</h2>
          <input value={this.state.length} onChange={this.numberSetter('length')} type="number" min="1" required/>
        </label>

        <h2>Options</h2>

        <label>
          <h3>Wordlist Length</h3>
          <input value={this.state.wordlistLength} onChange={this.numberSetter('wordlistLength')} type="number" min="1" required/>
        </label>

        <h2>Possible Passwords</h2>
        Roughly {size.toPrecision(4)} ({this.constructor.bits(size)} bits of entropy)
      </form>
    )
  }
}
