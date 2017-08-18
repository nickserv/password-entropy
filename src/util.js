export function change (wrapper, target) {
  return wrapper.simulate('change', { target: { ...wrapper.props(), ...target } })
}
