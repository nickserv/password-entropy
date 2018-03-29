import {
  Card,
  CardContent,
  createMuiTheme,
  LinearProgress,
  MuiThemeProvider
} from 'material-ui'
import { List, Shuffle } from 'material-ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

export default function PossiblePasswords({
  possiblePasswords,
  approximate,
  entropyBits,
  entropyTip: { color, strength }
}) {
  return (
    <Card>
      <CardContent>
        <h3>
          <List /> Entropy
        </h3>
        <p>
          {entropyBits.toFixed(2)} bits ({strength})
        </p>
        <MuiThemeProvider
          theme={createMuiTheme({ palette: { primary: color } })}
        >
          <LinearProgress
            value={entropyBits * 100 / 128}
            variant="determinate"
          />
        </MuiThemeProvider>

        <h3>
          <Shuffle /> Possible Passwords
        </h3>
        <p>
          {approximate && '~ '}
          {possiblePasswords.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    color: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired
}
