import book from '@fortawesome/fontawesome-free-solid/faBook'
import checkSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import questionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'
import Icon from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import startCase from 'lodash/startCase'
import entries from 'object.entries'
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
    component: <Generic />,
    icon: <Icon icon={checkSquare} />
  },
  diceware: {
    component: <Diceware />,
    icon: <Icon icon={book} />
  },
  custom: {
    component: <Custom />,
    icon: <Icon icon={questionCircle} />
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Fragment>
      <Nav tabs>
        {entries(options).map(([name, { icon }]) => (
          <NavItem key={name}>
            <NavLink className={classnames({ active: optionsKey === name })} href="#" onClick={setOptionsKey.bind(null, name)}>
              {icon} {startCase(name)}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent activeTab={optionsKey}>
        {entries(options).map(([name, { component }]) => (
          <TabPane key={name} tabId={name}>
            <Card><CardBody>{component}</CardBody></Card>
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
