import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data')
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        送資料到ChildA
      </button>
    </>
  )
}

export default ChildB
