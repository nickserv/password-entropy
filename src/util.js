import { propOr } from 'ramda'

export function change (wrapper, target) {
  return wrapper.simulate('change', { target: { ...wrapper.props(), ...target } })
}

export function handleChange ({ target: { name, checked, type, value } }) {
  this.setState({
    [name]: propOr(value, type, {
      checkbox: checked,
      number: parseInt(value, 10)
    })
  })
}
