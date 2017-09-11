import { Card, CardText } from 'material-ui/Card'
import LinearProgress from 'material-ui/LinearProgress'
import ActionList from 'material-ui/svg-icons/action/list'
import AvShuffle from 'material-ui/svg-icons/av/shuffle'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import possibleItemsSelector from '../reducers/possibleItemsSelector'

export function PossiblePasswords({
  possiblePasswords, approximate, entropyBits, entropyTip: { color, strength }
}) {
  return (
    <Card>
      <CardText>
        <h3><ActionList /> Entropy</h3>
        <p>{entropyBits.toFixed(2)} bits ({strength})</p>
        <LinearProgress color={color} max={128} mode="determinate" value={entropyBits} />

        <h3><AvShuffle /> Possible Passwords</h3>
        <p>{approximate && '~ '}{possiblePasswords.toLocaleString()}</p>
      </CardText>
    </Card>
  )
}

PossiblePasswords.propTypes = {
  approximate: PropTypes.bool.isRequired,
  entropyBits: PropTypes.number.isRequired,
  entropyTip: PropTypes.shape({
    color: PropTypes.string.isRequired,
    minimum: PropTypes.number.isRequired,
    strength: PropTypes.string.isRequired
  }).isRequired,
  possiblePasswords: PropTypes.number.isRequired
}

export default connect(possibleItemsSelector)(PossiblePasswords)
