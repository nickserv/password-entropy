import { setOptionsKey} from '../actions'
import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import GenericOptions from '../options/GenericOptions'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React from 'react'
import { Panel, Tab, Tabs } from 'react-bootstrap'
import Icon from 'react-fa'
import { connect } from 'react-redux'

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

export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function Options ({ optionsKey, setOptionsKey }) {
  return (
    <Tabs activeKey={optionsKey} onSelect={setOptionsKey} id="options">
      {Object.entries(options).map(([name, { Component, icon }]) => (
        <Tab key={name} eventKey={name} title={<div><Icon name={icon}/> {capitalize(name)}</div>}>
          <Panel><Component/></Panel>
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
