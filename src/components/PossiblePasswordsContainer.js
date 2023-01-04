import PropTypes from 'prop-types'
import PossiblePasswords from './PossiblePasswords'

export const dicewareWords = 7776

const entropyTips = [
  {
    minimum: 0,
    strength: 'Very Weak',
    style: 'danger',
  },
  {
    minimum: 32,
    strength: 'Weak',
    style: 'warning',
  },
  {
    minimum: 64,
    strength: 'Strong',
    style: 'info',
  },
  {
    minimum: 128,
    strength: 'Very Strong',
    style: 'success',
  },
]

const toggles = {
  Letters: 26,
  'Capital Letters': 26,
  Numbers: 10,
  Symbols: 8,
}

export default function PossiblePasswordsContainer({
  length,
  options: { Custom, Generic },
  optionsKey,
}) {
  const possibleItems = {
    Generic: Object.entries(Generic)
      .filter(([, value]) => value)
      .map(([key]) => toggles[key])
      .reduce((x, y) => x + y),
    Diceware: dicewareWords,
    Custom,
  }
  const possiblePasswords = possibleItems[optionsKey] ** length
  const approximate = possiblePasswords > Number.MAX_SAFE_INTEGER
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))
  const entropyTip = Array.from(entropyTips)
    .reverse()
    .find((tip) => entropyBits >= tip.minimum, entropyTips)

  return (
    <PossiblePasswords
      possiblePasswords={possiblePasswords}
      approximate={approximate}
      entropyBits={entropyBits}
      entropyTip={entropyTip}
    />
  )
}

PossiblePasswordsContainer.propTypes = {
  length: PropTypes.number.isRequired,
  options: PropTypes.shape({
    Custom: PropTypes.number.isRequired,
    Generic: PropTypes.shape({
      Letters: PropTypes.bool.isRequired,
      'Capital Letters': PropTypes.bool.isRequired,
      Numbers: PropTypes.bool.isRequired,
      Symbols: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  optionsKey: PropTypes.string.isRequired,
}
