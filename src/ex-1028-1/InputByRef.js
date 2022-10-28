import React, { useRef } from 'react'

function InputByRef() {
  const inputRef = useRef('')

  return (
    <>
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
export default InputByRef
