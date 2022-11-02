//import { FaEdit } from 'react-icons/fa'
function TodoText({ id, text, toggleTodoEditing, setInputEditingValue }) {
  return (
    <>
      <span
        onDoubleClick={() => {
          toggleTodoEditing(id)
        }}
      >
        {text}
      </span>
      {/* <button
        onClick={() => {
          // 切換編輯state
          toggleTodoEditing(id)
          // setInputEditingValue(text)
          //setInputEditingValue(text)
        }}
      >
        <FaEdit />
      </button> */}
    </>
  )
}

export default TodoText
