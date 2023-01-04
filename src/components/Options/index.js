import {
  faBook,
  faCheckSquare,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'
import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'

const icons = {
  Generic: faCheckSquare,
  Diceware: faBook,
  Custom: faQuestionCircle,
}

export default function Options({
  onCustom,
  onGeneric,
  onOptionsKey,
  options,
  optionsKey,
}) {
  return (
    <>
      <Nav tabs>
        {Object.entries(icons).map(([name, icon]) => (
          <NavItem key={name}>
            <NavLink
              active={optionsKey === name}
              href="#"
              onClick={() => onOptionsKey(name)}
            >
              <FontAwesomeIcon icon={icon} /> {name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={optionsKey}>
        <TabPane tabId="Generic">
          <Card>
            <CardBody>
              <Generic onGeneric={onGeneric} toggles={options.Generic} />
            </CardBody>
          </Card>
        </TabPane>

        <TabPane tabId="Diceware">
          <Card>
            <CardBody>
              <Diceware />
            </CardBody>
          </Card>
        </TabPane>

        <TabPane tabId="Custom">
          <Card>
            <CardBody>
              <Custom custom={options.Custom} onCustom={onCustom} />
            </CardBody>
          </Card>
        </TabPane>
      </TabContent>
    </>
  )
}

Options.propTypes = {
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
  onOptionsKey: PropTypes.func.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      Letters: PropTypes.bool.isRequired,
      'Capital Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  optionsKey: PropTypes.string.isRequired,
}
