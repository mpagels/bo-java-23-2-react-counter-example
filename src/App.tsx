import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
    </>
  )
}

function App() {
  return (
    <div className="Counter">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
