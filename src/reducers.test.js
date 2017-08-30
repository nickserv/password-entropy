import { GenericOptions } from './options/GenericOptions'
import { createReducer, toggleGenericCallback } from './reducers'

test('createReducer', () => {
  const reducer = createReducer('ACTION', false)
  expect(reducer(undefined, {})).toBe(false)
  expect(reducer(undefined, { type: 'ACTION', payload: true })).toBe(true)
})

test('createReducer with callback', () => {
  const reducer = createReducer('ACTION', 'extra ', { callback: (payload, state) => state + payload})
  expect(reducer(undefined, {})).toBe('extra ')
  expect(reducer(undefined, { type: 'ACTION', payload: true })).toBe('extra true')
})

test('createReducer with min', () => {
  const reducer = createReducer('ACTION', false, { min: 0 })
  expect(reducer(undefined, {})).toBe(false)
  expect(reducer(undefined, { type: 'ACTION', payload: NaN })).toBe(false)
  expect(reducer(undefined, { type: 'ACTION', payload: -1 })).toBe(false)
  expect(reducer(undefined, { type: 'ACTION', payload: 0 })).toBe(0)
  expect(reducer(undefined, { type: 'ACTION', payload: 1 })).toBe(1)
})

test('toggleGenericCallback', () => {
  expect(toggleGenericCallback({ name: 'letters', checked: false }, GenericOptions.defaultToggles)).toEqual({
    capitalLetters: true,
    letters: false,
    numbers: true,
    symbols: true
  })
})
