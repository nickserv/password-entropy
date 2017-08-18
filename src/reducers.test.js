import reducers from './reducers'

describe('reducers', () => {
  it('return initial state', () => {
    expect(reducers(undefined, {})).toMatchSnapshot()
  })

  function dispatch (type, payload) {
    return reducers(undefined, { type, payload })
  }

  it('handle SET_CUSTOM_POSSIBLE_ITEMS', () => {
    expect(dispatch('SET_CUSTOM_POSSIBLE_ITEMS', 2)).toMatchSnapshot()
  })

  it('handle SET_LENGTH', () => {
    expect(dispatch('SET_LENGTH', 7)).toMatchSnapshot()
  })

  it('handle SET_OPTIONS_INDEX', () => {
    expect(dispatch('SET_OPTIONS_INDEX', 1)).toMatchSnapshot()
  })

  it('handle TOGGLE_GENERIC', () => {
    expect(dispatch('TOGGLE_GENERIC', { name: 'letters', checked: false })).toMatchSnapshot()
  })
})
