import React from 'react'
import Todo from "./Todo";

const TodoList = ({todos, deleteTodo}) => (

  <div className="items">
    { todos.map(todo =>
      <Todo key={todo.id} {...todo} onDelete={(e) => {
        e.preventDefault()
        deleteTodo(todo.id)}}/>
    ) }
  </div>

)

export default TodoList