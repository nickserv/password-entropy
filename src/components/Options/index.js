import startCase from 'lodash/startCase'
import { Card, CardText, Tab, Tabs } from 'material-ui'
import { ActionBook, ImageEdit, NavigationCheck } from 'material-ui/svg-icons'
import entries from 'object.entries'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'
import { selector, setOptionsKey } from '../../reducers/optionsKey'

const options = {
  generic: {
    component: <Generic />,
    icon: <NavigationCheck />
  },
  diceware: {
    component: <Diceware />,
    icon: <ActionBook />
  },
  custom: {
    component: <Custom />,
    icon: <ImageEdit />
  }
}

export function Options({ optionsKey, setOptionsKey }) {
  return (
    <Card>
      <Tabs value={optionsKey} onChange={setOptionsKey}>
        {entries(options).map(([name, { component, icon }]) => (
          <Tab key={name} icon={icon} label={startCase(name)} value={name}>
            <CardText>{component}</CardText>
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

export default connect(selector, { setOptionsKey })(Options)
