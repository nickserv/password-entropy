import {
  faBook,
  faCheckSquare,
  faQuestionCircle
} from '@fortawesome/fontawesome-free-solid'
import Icon from '@fortawesome/react-fontawesome'
import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'

import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'

const icons = {
  generic: faCheckSquare,
  diceware: faBook,
  custom: faQuestionCircle
}

export default function Options({
  onCustom,
  onGeneric,
  onOptionsKey,
  options,
  optionsKey
}) {
  return (
    <Fragment>
      <Nav tabs>
        {Object.entries(icons).map(([name, icon]) => (
          <NavItem key={name}>
            <NavLink
              active={optionsKey === name}
              href="#"
              onClick={onOptionsKey.bind(null, name)}
            >
              <Icon icon={icon} /> {startCase(name)}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={optionsKey}>
        <TabPane tabId="generic">
          <Card>
            <CardBody>
              <Generic {...options.generic} onGeneric={onGeneric} />
            </CardBody>
          </Card>
        </TabPane>

        <TabPane tabId="diceware">
          <Card>
            <CardBody>
              <Diceware />
            </CardBody>
          </Card>
        </TabPane>

        <TabPane tabId="custom">
          <Card>
            <CardBody>
              <Custom custom={options.custom} onCustom={onCustom} />
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

Options.propTypes = {
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
  onOptionsKey: PropTypes.func.isRequired,
  options: PropTypes.shape({
    custom: PropTypes.number.isRequired,
    generic: PropTypes.shape({
      letters: PropTypes.bool.isRequired,
      capitalLetters: PropTypes.bool.isRequired,
      numbers: PropTypes.bool.isRequired,
      symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
