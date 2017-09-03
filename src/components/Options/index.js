import startCase from 'lodash/startCase'
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
    Component: Generic,
    icon: 'check-square'
  },
  diceware: {
    Component: Diceware,
    icon: 'book'
  },
  custom: {
    Component: Custom,
    icon: 'question-circle'
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Tabs activeKey={optionsKey} onSelect={setOptionsKey} id="options">
      {Object.entries(options).map(([name, { Component, icon }]) => (
        <Tab key={name} eventKey={name} title={<div><Icon name={icon} /> {startCase(name)}</div>}>
          <Panel><Component /></Panel>
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
