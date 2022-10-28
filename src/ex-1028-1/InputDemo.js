import React, { useRef, useState } from 'react'

function InputDemo() {
  const [inputText, setInputText] = useState('')
  // ref的原型 {current:null}
  const inputRef = useRef('')

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
      <h1>不可控表單元件(ref)</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'eliot@ggg.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}
export default InputDemo
