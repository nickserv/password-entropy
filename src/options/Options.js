import startCase from 'lodash/startCase'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import pick from 'ramda/src/pick'
import React from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import Tab from 'react-bootstrap/lib/Tab'
import Tabs from 'react-bootstrap/lib/Tabs'
import Icon from 'react-fa'
import { connect } from 'react-redux'

import { setOptionsKey } from '../actions'
import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import GenericOptions from '../options/GenericOptions'

const options = {
  generic: {
    Component: GenericOptions,
    icon: 'check-square'
  },
  diceware: {
    Component: DicewareOptions,
    icon: 'book'
  },
  custom: {
    Component: CustomOptions,
    icon: 'question-circle'
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Tabs activeKey={optionsKey} onSelect={setOptionsKey} id="options">
      {entries(options).map(([name, { Component, icon }]) => (
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

export const mapStateToProps = pick(['optionsKey'])

export default connect(mapStateToProps, { setOptionsKey })(Options)
