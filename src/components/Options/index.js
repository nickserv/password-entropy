import { faBook, faCheckSquare, faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'
import { selector, setOptionsKey } from '../../reducers/optionsKey'

const options = {
  generic: {
    Component: Generic,
    icon: faCheckSquare
  },
  diceware: {
    Component: Diceware,
    icon: faBook
  },
  custom: {
    Component: Custom,
    icon: faQuestionCircle
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Fragment>
      <Nav tabs>
        {Object.entries(options).map(([name, { icon }]) => (
          <NavItem key={name}>
            <NavLink active={optionsKey === name} href="#" onClick={setOptionsKey.bind(null, name)}>
              <Icon icon={icon} /> {startCase(name)}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={optionsKey}>
        {Object.entries(options).map(([name, { Component }]) => (
          <TabPane key={name} tabId={name}>
            <Card><CardBody><Component /></CardBody></Card>
          </TabPane>
        ))}
      </TabContent>
    </Fragment>
  )
}

Options.propTypes = {
  optionsKey: PropTypes.string.isRequired,
  setOptionsKey: PropTypes.func.isRequired
}

export default connect(selector, { setOptionsKey })(Options)
