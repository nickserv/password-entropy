import React, { PureComponent } from 'react'

export default class DicewareOptions extends PureComponent {
  state = {
    wordlistLength: 7776
  }

  handleChange = event => this.setState({ wordlistLength: parseInt(event.target.value, 10) })

  componentDidMount () {
    this.props.onChange(this.state.wordlistLength)
  }

  componentWillUpdate (props, state) {
    this.props.onChange(state.wordlistLength)
  }

  render () {
    return (
      <div>
        <h3>Diceware</h3>
        <label>
          <h4>Wordlist Length</h4>
          <input value={this.state.wordlistLength} onChange={this.handleChange} type="number" min="1" required/>
        </label>
      </div>
    )
  }
}
