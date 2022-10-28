import { useState } from 'react'

function ChildD(props) {
  const [childDData, setChildDData] = useState('D的資料來囉')
  return (
    <>
      <h1>ChildD</h1>
      <button
        onClick={() => {
          props.setDataFromChildD(childDData)
        }}
      >
        資料發送
      </button>
    </>
  )
}
export default ChildD
