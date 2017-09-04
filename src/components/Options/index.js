import startCase from 'lodash/startCase'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Tab from 'react-bootstrap/lib/Tab'
import Tabs from 'react-bootstrap/lib/Tabs'
import Icon from 'react-fa'
import { connect } from 'react-redux'

import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'
import { selector, setOptionsKey } from '../../reducers/optionsKey'

const options = {
  generic: {
    component: <Generic />,
    icon: <Icon name="check-square" />
  },
  diceware: {
    component: <Diceware />,
    icon: <Icon name="book" />
  },
  custom: {
    component: <Custom />,
    icon: <Icon name="question-circle" />
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Tabs activeKey={optionsKey} onSelect={setOptionsKey} id="options">
      {entries(options).map(([name, { component, icon }]) => (
        <Tab key={name} eventKey={name} title={<div>{icon} {startCase(name)}</div>}>
          <Panel>{component}</Panel>
        </Tab>
      ))}
    </Tabs>
  )
}

Options.propTypes = {
  optionsKey: PropTypes.string.isRequired,
  setOptionsKey: PropTypes.func.isRequired
}

export default connect(selector, { setOptionsKey })(Options)
