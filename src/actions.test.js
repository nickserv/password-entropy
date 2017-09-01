import { setCustom, setLength, setOptionsKey, toggleGeneric } from './actions'

test('setCustom', () => {
  expect(setCustom({ target: { value: '1' } })).toEqual({
    type: 'SET_CUSTOM',
    payload: 1
  })
})

test('setLength', () => {
  expect(setLength({ target: { value: '6' } })).toEqual({
    type: 'SET_LENGTH',
    payload: 6
  })
})

test('setOptionsKey', () => {
  expect(setOptionsKey('generic')).toEqual({
    type: 'SET_OPTIONS_KEY',
    payload: 'generic'
  })
})

test('toggleGeneric', () => {
  const target = { checked: false, name: 'letters' }
  expect(toggleGeneric({ target })).toEqual({
    type: 'TOGGLE_GENERIC',
    payload: target
  })
})
