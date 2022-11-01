import {FaEdit} from 'react-icons/fa'
function TodoItem({ id, text, toggleTodoEditing, setInputEditingValue }) {
  return (
    <>
      {text}
      <button
        onClick={() => {
          toggleTodoEditing(id)
          setInputEditingValue(text)
        }}
      >
        <FaEdit />
      </button>
    </>
  )
}

export default TodoItem
