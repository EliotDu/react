import { useState } from 'react'
import ChildC from './ChildC'
import ChildD from './ChildD'

function ParentTest() {
  //接收資料的窗口
  const [dataFromChildD, setDataFromChildD] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <hr />
      <ChildC dataFromChildD={dataFromChildD}></ChildC>
      <ChildD setDataFromChildD={setDataFromChildD}></ChildD>
    </>
  )
}

export default ParentTest
