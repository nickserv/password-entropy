function getValue (target) {
  switch (target.type) {
    case 'checkbox': return target.checked
    case 'number': return parseInt(target.value, 10)
    default: return target.value
  }
}

export default function ({ target }) {
  this.setState({ [target.name]: getValue(target) })
}
