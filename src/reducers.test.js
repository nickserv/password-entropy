import reducers from './reducers'

describe('reducers', () => {
  const initialState = reducers(undefined, {})

  it('return initial state', () => {
    expect(initialState).toMatchSnapshot()
  })

  function dispatch (type, payload) {
    return reducers(undefined, { type, payload })
  }

  it('handle SET_CUSTOM_POSSIBLE_ITEMS', () => {
    expect(dispatch('SET_CUSTOM_POSSIBLE_ITEMS', NaN)).toEqual(initialState)
    expect(dispatch('SET_CUSTOM_POSSIBLE_ITEMS', -1)).toEqual(initialState)
    expect(dispatch('SET_CUSTOM_POSSIBLE_ITEMS', 0)).not.toEqual(initialState)
    expect(dispatch('SET_CUSTOM_POSSIBLE_ITEMS', 2)).toMatchSnapshot()
  })

  it('handle SET_LENGTH', () => {
    expect(dispatch('SET_LENGTH', NaN)).toEqual(initialState)
    expect(dispatch('SET_LENGTH', 0)).toEqual(initialState)
    expect(dispatch('SET_LENGTH', 1)).not.toEqual(initialState)
    expect(dispatch('SET_LENGTH', 7)).toMatchSnapshot()
  })

  it('handle SET_OPTIONS_INDEX', () => {
    expect(dispatch('SET_OPTIONS_INDEX', 1)).toMatchSnapshot()
  })

  it('handle TOGGLE_GENERIC', () => {
    expect(dispatch('TOGGLE_GENERIC', { name: 'letters', checked: false })).toMatchSnapshot()
  })
})
