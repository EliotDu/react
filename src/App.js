import { exsamples } from './exsamples'
//import Menu from './practice/Menu'

import { useState } from 'react'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {exsamples.map((value, index) => {
        return (
          <option key={index} value={index}>
            {value.name}
          </option>
        )
      })}
    </select>
  )
  const MyComponent = exsamples[displayIndex].component
  return (
    <>
      {/* <Menu /> */}
      {selection}
      <hr />
      <MyComponent />
    </>
  )
}
//輸出
export default App
