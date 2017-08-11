export default function (wrapper, target) {
  return wrapper.simulate('change', { target: { ...wrapper.props(), ...target } })
}
