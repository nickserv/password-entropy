import PropTypes from 'prop-types'
import React from 'react'

import Custom from './Custom'
import Generic from './Generic'

export default function Options({ onCustom, onGeneric, options, optionsKey }) {
  return {
    Generic: <Generic onGeneric={onGeneric} toggles={options.Generic} />,
    Diceware: null,
    Custom: <Custom custom={options.Custom} onCustom={onCustom} />
  }[optionsKey]
}

Options.propTypes = {
  onCustom: PropTypes.func.isRequired,
  onGeneric: PropTypes.func.isRequired,
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
