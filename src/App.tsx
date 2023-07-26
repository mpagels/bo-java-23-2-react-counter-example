import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  function handleOnClickPlus1() {
    setCount(count + 1)
  }
  function handleOnClickMinus1() {
    setCount(count - 1)
  }

  return (
    <div className="Counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={handleOnClickPlus1}>Add +1</button>
        <button onClick={handleOnClickMinus1}>Add -1</button>
      </div>
    </div>
  )
}

export default App
