import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from 'material-ui'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Options from './Options'
import ResultsContainer from './ResultsContainer'

export default function App({
  length,
  onCustom,
  onGeneric,
  onLength,
  onOptionsKey,
  options,
  optionsKey
}) {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Password Entropy
          </Typography>
        </Toolbar>

        <Tabs value={optionsKey} onChange={onOptionsKey}>
          {['Generic', 'Diceware', 'Custom'].map(name => (
            <Tab key={name} label={name} value={name} />
          ))}
        </Tabs>
      </AppBar>

      <Grid container>
        <Grid item xs={12} sm>
          <Options
            length={length}
            onCustom={onCustom}
            onGeneric={onGeneric}
            onLength={onLength}
            options={options}
            optionsKey={optionsKey}
          />
        </Grid>

        <Grid item xs={12} sm>
          <ResultsContainer
            length={length}
            options={options}
            optionsKey={optionsKey}
          />
        </Grid>
      </Grid>
    </Fragment>
  )
}

App.propTypes = {
  length: PropTypes.number.isRequired,
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
  onLength: PropTypes.func.isRequired,
  onOptionsKey: PropTypes.func.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      'Lowercase Letters': PropTypes.bool.isRequired,
      'Uppercase Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  optionsKey: PropTypes.string.isRequired
}
