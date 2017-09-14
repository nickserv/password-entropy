import React from 'react'
import Renderer from 'react-test-renderer/shallow'

import { Generic } from './Generic'
import { defaultToggles } from '../../reducers/generic'

test('Generic', () => {
  expect(
    new Renderer().render(<Generic toggleGeneric={() => {}} {...defaultToggles} />)
  ).toMatchSnapshot()
})
