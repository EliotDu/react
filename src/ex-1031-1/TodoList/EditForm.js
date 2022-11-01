import { useState } from 'react'

function EditForm({ id, updateTodo, inputEditingValue, setInputEditingValue }) {
  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        onChange={(e) => {
          setInputEditingValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          updateTodo(id, {
            text: inputEditingValue,
            editing: false,
          })
        }}
      >
        SAVE
      </button>
    </>
  )
}

export default EditForm