import { exsamples } from './exsamples'
import { useState } from 'react'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        //注意要轉型資料型態，保持state資料型態一致
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
      {selection}
      <p>元件檔案路徑: {exsamples[displayIndex].path}</p>
      <hr />
      <MyComponent />
    </>
  )
}
//輸出
export default App
