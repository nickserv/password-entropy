import { shallow } from 'enzyme'

import Custom from './Custom'

test('Custom', () => {
  const handleCustom = jest.fn()
  const wrapper = shallow(<Custom custom={1} onCustom={handleCustom} />)
  wrapper.find('Input').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(handleCustom).toHaveBeenCalled()
})
