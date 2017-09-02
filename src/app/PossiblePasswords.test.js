import { shallow } from 'enzyme'
import { PossiblePasswords, mapStateToProps } from './PossiblePasswords'
import { mergeDeepRight } from 'ramda'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

describe('PossiblePasswords', () => {
  function getWrapper (approximate) {
    return shallow(<PossiblePasswords approximate={approximate} entropyBits={77.54887502163469} entropyTip={{ minimum: 64, strength: 'Strong', style: 'info' }} possiblePasswords={2.2107391972073336e+23}/>)
  }

  test('approximate', () => {
    expect(getWrapper(true)).toMatchSnapshot()
  })

  test('exact', () => {
    expect(getWrapper(false)).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  function mapMergedStateToProps (state = {}) {
    return mapStateToProps(mergeDeepRight(
      createStore(reducers).getState(),
      state
    ))
  }

  test('generic', () => {
    expect(mapMergedStateToProps()).toMatchSnapshot()
  })

  test('diceware', () => {
    expect(mapMergedStateToProps({ optionsKey: 'diceware' })).toMatchSnapshot()
  })

  test('custom', () => {
    expect(mapMergedStateToProps({ optionsKey: 'custom' })).toMatchSnapshot()
  })

  test('custom with invalid possibleItems', () => {
    expect(mapMergedStateToProps({
      options: { custom: 0 },
      optionsKey: 'custom'
    })).toMatchSnapshot()
  })

  test('custom with weak possiblePasswords', () => {
    expect(mapMergedStateToProps({
      length: 32,
      options: { custom: 2 },
      optionsKey: 'custom'
    })).toMatchSnapshot()
  })

  test('custom with strong possiblePasswords', () => {
    expect(mapMergedStateToProps({
      length: 64,
      options: { custom: 2 },
      optionsKey: 'custom'
    })).toMatchSnapshot()
  })

  test('custom with very strong possiblePasswords', () => {
    expect(mapMergedStateToProps({
      length: 128,
      options: { custom: 2 },
      optionsKey: 'custom'
    })).toMatchSnapshot()
  })
})
