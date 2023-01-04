import { shallow } from 'enzyme'

import Diceware from './Diceware'

test('Diceware', () => {
  expect(shallow(<Diceware />)).toMatchSnapshot()
})
