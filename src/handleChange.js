import { propOr } from 'ramda'

export default function ({ target: { name, checked, type, value } }) {
  this.setState({
    [name]: propOr(value, type, {
      checkbox: checked,
      number: parseInt(value, 10)
    })
  })
}
