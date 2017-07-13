import DicewareOptions from './DicewareOptions'
import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  state = {
    length: 6
  }

  handleLengthChange = event => this.setState({ length: parseInt(event.target.value, 10) })
  handlePossibleItemsChange = possibleItems => this.setState({ possibleItems })

  render () {
    const possiblePasswords = this.state.possibleItems ** this.state.length

    return (
      <form>
        <h1>Password Entropy</h1>

        <label>
          <h2>Length</h2>
          <input value={this.state.length} onChange={this.handleLengthChange} type="number" min="1" required/>
        </label>

        <h2>Options</h2>
        <DicewareOptions onChange={this.handlePossibleItemsChange}/>

        <h2>Possible Passwords</h2>
        Roughly {possiblePasswords.toPrecision(4)} ({Math.floor(Math.log2(possiblePasswords)) + 1} bits of entropy)
      </form>
    )
  }
}
