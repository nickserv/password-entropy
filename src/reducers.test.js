import reducers from './reducers'

describe('reducers', () => {
  const initialState = reducers(undefined, {})

  it('return initial state', () => {
    expect(initialState).toMatchSnapshot()
  })

  function dispatch (type, payload) {
    return reducers(undefined, { type, payload })
  }

  it('handle SET_CUSTOM', () => {
    expect(dispatch('SET_CUSTOM', NaN)).toEqual(initialState)
    expect(dispatch('SET_CUSTOM', -1)).toEqual(initialState)
    expect(dispatch('SET_CUSTOM', 0)).not.toEqual(initialState)
    expect(dispatch('SET_CUSTOM', 2)).toMatchSnapshot()
  })

  it('handle SET_LENGTH', () => {
    expect(dispatch('SET_LENGTH', NaN)).toEqual(initialState)
    expect(dispatch('SET_LENGTH', 0)).toEqual(initialState)
    expect(dispatch('SET_LENGTH', 1)).not.toEqual(initialState)
    expect(dispatch('SET_LENGTH', 7)).toMatchSnapshot()
  })

  it('handle SET_OPTIONS_KEY', () => {
    expect(dispatch('SET_OPTIONS_KEY', 'custom')).toMatchSnapshot()
  })

  it('handle TOGGLE_GENERIC', () => {
    expect(dispatch('TOGGLE_GENERIC', { name: 'letters', checked: false })).toMatchSnapshot()
  })
})
