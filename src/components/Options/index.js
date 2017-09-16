import Card, { CardContent } from 'material-ui/Card'
import Tabs, { Tab } from 'material-ui/Tabs'
import Book from 'material-ui-icons/Book'
import Check from 'material-ui-icons/Check'
import Edit from 'material-ui-icons/Edit'
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
        {Object.entries(options).map(([name, { icon }]) => (
          <Tab key={name} icon={icon} label={name} value={name} />
        ))}
      </Tabs>
      <CardContent>{options[optionsKey].component}</CardContent>
    </Card>
  )
}

Options.propTypes = {
  optionsKey: PropTypes.string.isRequired,
  setOptionsKey: PropTypes.func.isRequired
}

export default connect(selector, { setOptionsKey })(Options)
