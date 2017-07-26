function getValue ({ checked, type, value }) {
  switch (type) {
    case 'checkbox': return checked
    case 'number': return parseInt(value, 10)
    default: return value
  }
}

export default function ({ target }) {
  this.setState({ [target.name]: getValue(target) })
}
