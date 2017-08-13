import handleChange from '../handleChange'
import Options from './Options'
import { filter, identity, keys, map, pipe, sum, T } from 'ramda'
import React, { PureComponent } from 'react'
import { Checkbox } from 'react-bootstrap'

export default class GenericOptions extends PureComponent {
  static propTypes = Options.sharedPropTypes
  static shortName = 'Generic'

  static toggles = {
    letters: {
      label: 'Letters',
      example: 'a-z',
      possibleItems: 26
    },
    capitalLetters: {
      label: 'Capital Letters',
      example: 'A-Z',
      possibleItems: 26
    },
    numbers: {
      label: 'Numbers',
      example: '0-9',
      possibleItems: 10
    },
    symbols: {
      label: 'Symbols',
      example: '!@#$%^&*',
      possibleItems: 8
    }
  }

  state = map(T, this.constructor.toggles)

  handleChange = handleChange.bind(this)

  possiblePasswords = () => pipe(filter(identity),
                                 keys,
                                 map(key => this.constructor.toggles[key].possibleItems),
                                 sum)(this.state)

  render () {
    return (
      <Options possiblePasswords={this.possiblePasswords} {...this.props}>
        <h3>Generic</h3>

        {Object.entries(this.constructor.toggles)
               .map(([name, { label, example }]) => (
                 <Checkbox key={name} name={name} checked={this.state[name]} onChange={this.handleChange}>
                   { label } <small>({ example })</small>
                 </Checkbox>
               ))}
      </Options>
    )
  }
}
