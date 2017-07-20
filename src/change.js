export default function (wrapper, target) {
  wrapper.simulate('change', { target: { ...wrapper.props(), ...target } })
}
