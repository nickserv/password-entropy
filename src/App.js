import React from 'react'

function bits (size) {
  return Math.floor(Math.log2(size)) + 1
}

const App = props => {
  const listSize = 7776
  const passwordSize = 6
  const size = listSize ** passwordSize
  return <div>
    <p>{size} passwords</p>
    <p>{bits(size)} bits of entropy</p>
  </div>
}

export default App
