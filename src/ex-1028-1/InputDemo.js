import React, { useRef, useState } from 'react'
import InputById from './InputById'
import InputByRef from './InputByRef'
function InputDemo() {
  const [inputText, setInputText] = useState('')
  // ref的原型 {current:null}
 
  return (
    <>
      <h1>可控表單元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setInputText('eliot@ggg.com')
        }}
      >
        載入資料
      </button>

      <hr />
      <h1>不可控表單元件(id)</h1>
      <InputById />
      <InputById />
      <h1>不可控表單元件(ref)</h1>
      <InputByRef />
      <InputByRef />
    </>
  )
}
export default InputDemo
