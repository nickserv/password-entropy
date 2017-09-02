import { Card, CardText, Tab, Tabs } from 'material-ui'
import { ActionBook, ImageEdit, NavigationCheck } from 'material-ui/svg-icons'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

import { setOptionsKey } from '../actions'
import CustomOptions from '../options/CustomOptions'
import DicewareOptions from '../options/DicewareOptions'
import GenericOptions from '../options/GenericOptions'

const options = {
  generic: {
    Component: GenericOptions,
    Icon: NavigationCheck
  },
  diceware: {
    Component: DicewareOptions,
    Icon: ActionBook
  },
  custom: {
    Component: CustomOptions,
    Icon: ImageEdit
  }
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Card>
      <Tabs value={optionsKey} onChange={setOptionsKey}>
        {Object.entries(options).map(([name, { Component, Icon }]) => (
          <Tab key={name} icon={<Icon />} label={capitalize(name)} value={name}>
            <CardText><Component /></CardText>
          </Tab>
        ))}
      </Tabs>
    </Card>
  )
}

Options.propTypes = {
  optionsKey: PropTypes.string.isRequired,
  setOptionsKey: PropTypes.func.isRequired
}

export const mapStateToProps = pick(['optionsKey'])

export default connect(mapStateToProps, { setOptionsKey })(Options)
