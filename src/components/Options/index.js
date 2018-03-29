import Card, { CardContent } from 'material-ui/Card'
import Tabs, { Tab } from 'material-ui/Tabs'
import Book from 'material-ui-icons/Book'
import Check from 'material-ui-icons/Check'
import Edit from 'material-ui-icons/Edit'
import PropTypes from 'prop-types'
import React from 'react'

import Custom from './Custom'
import Diceware from './Diceware'
import Generic from './Generic'

const icons = {
  Generic: <Check />,
  Diceware: <Book />,
  Custom: <Edit />
}

export default function Options({
  onCustom,
  onGeneric,
  onOptionsKey,
  options,
  optionsKey
}) {
  return (
    <Card>
      <Tabs value={optionsKey} onChange={onOptionsKey}>
        {Object.entries(icons).map(([name, icon]) => (
          <Tab key={name} icon={icon} label={name} value={name} />
        ))}
      </Tabs>
      <CardContent>
        {
          {
            Generic: (
              <Generic onGeneric={onGeneric} toggles={options.Generic} />
            ),
            Diceware: <Diceware />,
            Custom: <Custom custom={options.Custom} onCustom={onCustom} />
          }[optionsKey]
        }
      </CardContent>
    </Card>
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
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
