import React, { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')
  return (
    <>
      <h1>文字輸入框(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h1>文字輸入區域(textarea)</h1>
      <textarea
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />
    </>
  )
}
export default HTML5Form
