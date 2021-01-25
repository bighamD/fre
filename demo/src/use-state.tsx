import { h, render, useLayout, useEffect, useState } from '../../src/index'

function App() {
  const [count, setCount] = useState(0)
  // const [two, setTwo] = useState(0)
  useEffect(() => {
    console.log('effect')
    // const btn = document.querySelector('#btn')
    // console.log(btn.textContent)
    return () => {
      console.log('effect clean')
    }
  })
  useLayout(() => {
    // const btn = document.querySelector('#btn')
    // if (btn) {
    //    btn.textContent = '1234';
    // }
    console.log('layout');
    return () => {
      console.log('layout clean')
    }
  })
  return (
    <div>
      <button id="btn" onClick={() => setCount(() => count + 1)}>{count}{count}</button>
      <Button></Button>
    </div>
  )
}

function Button () {
  const start = performance.now();
  while(performance.now() - start < 100) {}
  return <div>1234</div>
}

render(<App />, document.body)
