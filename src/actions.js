export function setCustom({ target: { value } }) {
  return {
    type: 'SET_CUSTOM',
    payload: parseInt(value, 10)
  }
}

export function setLength({ target: { value } }) {
  return {
    type: 'SET_LENGTH',
    payload: parseInt(value, 10)
  }
}

export function setOptionsKey(key) {
  return {
    type: 'SET_OPTIONS_KEY',
    payload: key
  }
}

export function toggleGeneric({ target: { checked, name } }) {
  return {
    type: 'TOGGLE_GENERIC',
    payload: {
      checked,
      name
    }
  }
}
