// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function countReducer(currentState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: currentState.count + action.step}
    default:
      return currentState
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
