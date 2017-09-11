import startCase from 'lodash/startCase'
import { Card, CardText } from 'material-ui/Card'
import { Tabs, Tab } from 'material-ui/Tabs'
import Book from 'material-ui/svg-icons/action/book'
import Check from 'material-ui/svg-icons/navigation/check'
import Edit from 'material-ui/svg-icons/image/edit'
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
    icon: <Check />
  },
  diceware: {
    component: <Diceware />,
    icon: <Book />
  },
  custom: {
    component: <Custom />,
    icon: <Edit />
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
