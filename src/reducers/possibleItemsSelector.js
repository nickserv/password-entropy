import { blue500, green500, red500, yellow500 } from 'material-ui/styles/colors'
import always from 'ramda/src/always'
import filter from 'ramda/src/filter'
import findLast from 'ramda/src/findLast'
import identity from 'ramda/src/identity'
import keys from 'ramda/src/keys'
import map from 'ramda/src/map'
import pipe from 'ramda/src/pipe'
import sum from 'ramda/src/sum'

import { toggles } from './generic'

export const dicewareWords = 7776

const entropyTips = [
  {
    color: red500,
    minimum: 0,
    strength: 'Very Weak'
  },
  {
    color: yellow500,
    minimum: 32,
    strength: 'Weak'
  },
  {
    color: blue500,
    minimum: 64,
    strength: 'Strong'
  },
  {
    color: green500,
    minimum: 128,
    strength: 'Very Strong'
  }
]

const possibleItems = {
  generic: pipe(
    filter(identity),
    keys,
    map(key => toggles[key].possibleItems),
    sum
  ),
  diceware: always(dicewareWords),
  custom: identity
}

export default function possibleItemsSelector({ length, options, optionsKey }) {
  const possiblePasswords = possibleItems[optionsKey](options[optionsKey]) ** length
  const entropyBits = Math.max(0, Math.log2(possiblePasswords))

  return {
    approximate: possiblePasswords > Number.MAX_SAFE_INTEGER,
    entropyBits,
    entropyTip: findLast(tip => entropyBits >= tip.minimum, entropyTips),
    possiblePasswords
  }
}
