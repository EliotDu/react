import EditForm from './EditForm'
import TodoText from './TodoText'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

function TodoItem({
  todo,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  return (
    <li className={todo.completed ? 'completed' : 'not-completed'}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodoCompleted(todo.id)
        }}
      />
      {todo.editing ? (
        <EditForm id={todo.id} updateTodo={updateTodo} text={todo.text} />
      ) : (
        <TodoText
          id={todo.id}
          text={todo.text}
          toggleTodoEditing={toggleTodoEditing}
        />
      )}

      <Button
        variant="outline-warning"
        className="m-1"
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        delete
      </Button>
    </li>
  )
}
export default TodoItem
