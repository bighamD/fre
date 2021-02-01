import { h, render, useLayout, useEffect, useState } from '../../src/index'

function App() {
  const [count, setCount] = useState(0)
  const [two, setTwo] = useState(0)
  console.log(count,two)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setTwo(two + 1)}>{two}</button>
    </div>
  )
}

function Button () {
  const start = performance.now();
  while(performance.now() - start < 100) {}
  return <div>1234</div>
}

render(<App />, document.body)
