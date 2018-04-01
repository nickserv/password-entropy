import { Card, CardContent, Tab, Tabs } from 'material-ui'
import PropTypes from 'prop-types'
import React from 'react'

import Custom from './Custom'
import Generic from './Generic'

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
        {['Generic', 'Diceware', 'Custom'].map(name => (
          <Tab key={name} label={name} value={name} />
        ))}
      </Tabs>
      <CardContent>
        {
          {
            Generic: (
              <Generic onGeneric={onGeneric} toggles={options.Generic} />
            ),
            Diceware: null,
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
