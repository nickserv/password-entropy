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
  generic: <Check />,
  diceware: <Book />,
  custom: <Edit />
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
            generic: <Generic {...options.generic} onGeneric={onGeneric} />,
            diceware: <Diceware />,
            custom: <Custom custom={options.custom} onCustom={onCustom} />
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
